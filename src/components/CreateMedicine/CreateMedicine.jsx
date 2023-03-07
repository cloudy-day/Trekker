import { Box } from '@mui/material'
import React,{useEffect, useState} from 'react'
import styles from './CreateMedicine.module.css'
import image from './medicine1.jpg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import getProfile from '../../utils/account';
import { loadWeb3 } from '../../utils/loadWeb3'
import ContractAbi from '../../abis/Medicine.json'



const CreateMedicine = () => {


    const [manufacturer, setManufacturer] = useState("");
    const [manufacturerKey, setManufacturerKey] = useState("");
    const [medicine, setMedicine] = useState("");
    const [batch, setBatch] = useState("");
    const [price, setPrice] = useState("");
    const [dosage, setDosage] = useState("");
    const [mfDate, setMfDate] = useState(new Date());
    const [expDate, setExpDate] = useState(new Date());


    const getUserData = async () => {

    const {data,account} = await getProfile();
    
        setManufacturer(data[0]);
        setManufacturerKey(account);
    };
   

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (medicine && batch && dosage && price && mfDate && expDate) {
            console.log(manufacturer + medicine + batch + price + dosage + mfDate.toISOString().split('T')[0] + expDate.toISOString().split('T')[0]);


            const web3 = window.web3;
            const account = await web3.eth.getAccounts();
            const networkID = await web3.eth.net.getId();
            console.log(account);
            const networkData = ContractAbi.networks[networkID];



            if (networkData) {

                const contract = new web3.eth.Contract(
                    ContractAbi.abi,
                    networkData.address
                );

                const batNo = await contract.methods.getBatchNo(
                    medicine.toString().toLowerCase().trim(),batch.toString().toLowerCase().trim()).call();
                console.log(batNo);
                
                if (batNo) {
                    alert("Every time batch name should be unique");
                }
                else {

                    await contract.methods.createMedicine(
                    manufacturerKey.toString(),
                    manufacturer.toString(),
                    medicine.toString().toLowerCase().trim(),
                    batch.toString().toLowerCase().trim(),
                    dosage.toString().trim(),
                    price.toString().trim(),
                    mfDate.toISOString().split('T')[0],
                    expDate.toISOString().split('T')[0]
                    )
                    .send({ from: account[0] })
                    .once('reciept', (reciept) => {
                        console.log(reciept);
                    });
                    
                }

                
                
            }
            setMedicine("");
            setBatch("");
            setDosage("");
            setPrice("");
            setMfDate(new Date());
            setExpDate(new Date());

        }
        else {
            alert("Please submit all Information")
        }
    };

    
    useEffect(() => {
        loadWeb3();
        getUserData();
    },[]);


  return (
      <Box className={styles.createMedicine_main} sx={{backgroundImage: `url(${image})`}}>        
          <form className={styles.form_container} onSubmit={handleSubmit}>
              <Box className={ styles.form_header}><h3>Create Medicine</h3></Box>
              <label className={styles.label}>
                       <span className={styles.label_header}> Manufacturer</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={manufacturer}
                        disabled
                        // onChange={(e) => setManufacturer(e.target.value)}
                        />
                    </label>

                    <label className={styles.label}>
                        <span className={styles.label_header}>Medicine Name</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={medicine}
                        onChange={(e) => setMedicine(e.target.value)}
                        />
                    </label>

                    <label className={styles.label}>
                        <span className={styles.label_header}>Batch No</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={batch}
                        onChange={(e) => setBatch(e.target.value)}
                        />
                    </label>

                    <label className={styles.label}>
                        <span className={styles.label_header}>Dosage</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={dosage}
                        onChange={(e) => setDosage(e.target.value)}
                        />
                    </label>

                    <label className={styles.label}>
                       <span className={styles.label_header}> Price</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>

                    <label className={styles.label}>
                       <span className={styles.label_header}> Manufacturing Date</span>
                        <DatePicker showIcon className={styles.input_field} selected={mfDate} onChange={(date)=> setMfDate(date)} />
                    </label>

                    <label className={styles.label}>
                        <span className={styles.label_header}>Expiration Date</span>
                        <DatePicker showIcon className={styles.input_field} selected={expDate} onChange={(date)=> setExpDate(date)} />
                    </label>

                    
                    <button className={styles.btn} type="submit">Submit</button>
                </form>
              
      </Box>
  )
}

export default CreateMedicine

