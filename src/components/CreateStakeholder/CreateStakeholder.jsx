import { Box } from '@mui/material'
import React,{useEffect, useState} from 'react'
import styles from '../CreateMedicine/CreateMedicine.module.css'
import image from './a.jpg'
import ContractAbi from '../../abis/User.json'
import {loadWeb3} from '../../utils/loadWeb3'

const CreateStakeholder = () => {


  const [name, setName] = useState("");
  const [key, setKey] = useState("");
  const [webAddress, setWebAddress] = useState("");
  const [location, setLocation] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

      if (name && key && webAddress && location && option && option!=="Select the relevant stakeholder") {
        
          console.log(name + key + webAddress + location + option);
        
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

            await contract.methods.createStakeholder(
                key.toString(),
                name.toString(),
                webAddress.toString(),
                location.toString(),
                option.toString()
            )
            .send({ from: account[0] })
            .once('reciept', (reciept) => {
                console.log(reciept);
            });
            
        }
        
        
    }
    else {
        alert("Fill up the form correctly");
    }
      
    
  };

    useEffect(() => {
        // loadWeb3();
        
    },[]);

  return (
    <Box className={styles.createMedicine_main} sx={{backgroundImage: `url(${image})`}}>        
          <form className={styles.form_container} onSubmit={handleSubmit}>
              <Box className={ styles.form_header}><h3>Create Stakeholder</h3></Box>
                    <label className={styles.label}>
                       <span className={styles.label_header}>Name</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className={styles.label}>
                        <span className={styles.label_header}>Public Key</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className={styles.label}>
                        <span className={styles.label_header}>Web. Address</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={webAddress}
                        onChange={(e) => setWebAddress(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className={styles.label}>
                       <span className={styles.label_header}>Location</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className={styles.label}>
                    <span className={styles.label_header}>Stakeholder</span>
                        <select
                        
                        value={option}
                        onChange={(e)=> setOption(e.target.value)}
                        >
                            <option>Select the relevant stakeholder</option>
                            <option value="Manufacturer">Manufacturer</option>
                            <option value="Distributor">Distributor</option>
                            <option value="Retailer">Retailer</option>   

                        </select>
                    </label>
                    <br />
                    <button className={styles.btn}  type="submit">Submit</button>
                </form>
              
      </Box>
  )
}

export default CreateStakeholder