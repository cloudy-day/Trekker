import { Box } from '@mui/material'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../CreateMedicine/CreateMedicine.module.css'
import  image from './transaction1.jpg'


const Transaction = () => {


    const [providerName, setProviderName] = useState("");
    const [receiverName, setReceiverName] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [medicineName, setMedicineName] = useState("");
    const [batchNo, setBatchNo] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

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
                        onChange={(e) => setProviderName(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        <span className={styles.label_header}>Receiver Name</span>
                        <input
                        className={styles.input_field}
                        type="text"
                        value={receiverName}
                        onChange={(e) => setReceiverName(e.target.value)}
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