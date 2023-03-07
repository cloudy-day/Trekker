import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../CreateMedicine/CreateMedicine.module.css'
import image from './transaction1.jpg'
import getProfile from '../../utils/account';
import ContractAbi from '../../abis/Transaction.json'
import ContractAbi1 from '../../abis/Medicine.json'



const Transaction = () => {

    const [providerKey, setProviderKey] = useState("");
    const [providerType, setProviderType] = useState("");
    const [providerName, setProviderName] = useState("");
    const [receiverKey, setReceiverKey] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [medicineName, setMedicineName] = useState("");
    const [batchNo, setBatchNo] = useState("");

    const getUserData = async () => {

    const {data,account} = await getProfile();
    
        setProviderName(data[0]);
        setProviderKey(account);
        setProviderType(data[1]);
    
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
        // handle form submission logic here
        
        if (receiverKey && medicineName && batchNo && selectedDate) {
            
            // console.log(receiverKey + medicineName + batchNo + selectedDate);
            
            const web3 = window.web3;
            const account = await web3.eth.getAccounts();
            const networkID = await web3.eth.net.getId();
            // console.log(account);
            const networkData = ContractAbi.networks[networkID];
            

            const networkData1 = ContractAbi1.networks[networkID];

            if (networkData1) {

                const contract1 = new web3.eth.Contract(
                    ContractAbi1.abi,
                    networkData1.address,
                );
            
                const medData = await contract1.methods.getBatchNo(
                    medicineName.toString().toLowerCase().trim(),
                    batchNo.toString().toLowerCase().trim()
                ).call();

                
                

                


                

                if (!medData) {
                    alert("Transaction isn't possible because of non  exist medicine.");
                    setReceiverKey("");
                    setMedicineName("");
                    setBatchNo("");
                    setSelectedDate(new Date());
                }
            
                else {

                    const { data } = await getProfile(receiverKey);
                    let ok = 0;

                    if (networkData) {

                        const contract = new web3.eth.Contract(
                            ContractAbi.abi,
                            networkData.address
                        );

                        if (providerType === "Manufacturer") {
                            if (data[1] === "Distributor" || data[1] === "Retailer") {
                                ok = 1;
                            }
                            else {
                                alert("Transaction is not possible");
                            }
                        
                        }
                        else if (providerType === "Distributor") {

                            if (data[1] === "Retailer") {
                                ok = 1;
                            }
                            else {
                                alert("Transaction is not possible");
                            }
                        
                        }

                        if (ok) {

                            console.log(data[0] + data[1]);

                            await contract.methods.createTransaction(
                                providerKey.toString(),
                                providerName.toString(),
                                receiverKey.trim(),
                                data[0].toString(),
                                medicineName.toString().toLowerCase(),
                                batchNo.toString().toLowerCase().trim(),
                                selectedDate.toISOString().split('T')[0],
                            )
                                .send({ from: account[0] })
                                .once('reciept', (reciept) => {
                                    console.log(reciept);
                                });
                        
                        }
                        else {
                            alert("Receiver Key  is not registered.");
                        }
                        
                    }
            

                    
                }
        
            
            
            
            }

            setReceiverKey("");
            setMedicineName("");
            setBatchNo("");
            setSelectedDate(new Date());
        
            
        }
        else {
            alert("Fill up the form correctly");
        }
      
    };
    
    useEffect(() => {
        getUserData();
        }, []);

    return (
    <Box className={styles.createMedicine_main} sx={{backgroundImage: `url(${image})`}}>        
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <Box className={ styles.form_header}><h3>Create Transaction</h3></Box>
                    <label className={styles.label}>
                        <span className={styles.label_header}>Provider Name</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={providerName}
                        disabled
                        // onChange={(e) => setProviderName(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        <span className={styles.label_header}>Receiver Key</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={receiverKey}
                        onChange={(e) => setReceiverKey(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        <span className={styles.label_header}>Medicine Name</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={medicineName}
                        onChange={(e) => setMedicineName(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        <span className={styles.label_header}>Batch No.</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={batchNo}
                        onChange={(e) => setBatchNo(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        <span className={styles.label_header}>Delivery  Date</span>
                        <DatePicker showIcon className={styles.input_field} selected={selectedDate} onChange={(date)=> setSelectedDate(date)} />
                    </label>
                    
                    <button className={styles.btn} type="submit">Submit</button>
                </form>
                
        </Box>
    )
}

export default Transaction