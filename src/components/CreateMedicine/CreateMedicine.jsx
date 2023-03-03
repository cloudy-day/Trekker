import { Box } from '@mui/material'
import React,{useState} from 'react'
import styles from './CreateMedicine.module.css'
import image from './medicine1.jpg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateMedicine = () => {


  const [manufacturer, setManufacturer] = useState("");
  const [medicine, setMedicine] = useState("");
  const [batch, setBatch] = useState("");
  const [mfDate, setMfDate] = useState(new Date());
  const [expDate, setExpDate] = useState(new Date());
    const [price, setPrice] = useState("");
    const [dosage, setDosage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };


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
                        onChange={(e) => setManufacturer(e.target.value)}
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

