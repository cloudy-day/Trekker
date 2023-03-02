import { Box } from '@mui/material'
import React,{useState} from 'react'
import styles from '../CreateMedicine/CreateMedicine.module.css'
import image from './a.jpg'

const CreateStakeholder = () => {


  const [name, setName] = useState("");
  const [key, setKey] = useState("");
  const [webAddress, setWebAddress] = useState("");
  const [location, setLocation] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };



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
                    <button className={styles.btn} type="submit">Submit</button>
                </form>
              
      </Box>
  )
}

export default CreateStakeholder