import React,{useState} from 'react'
import { Box } from '@mui/material'
import styles from './TrackMedicine.module.css'



const TrackMedicine = () => {

    const [filePreview, setFilePreview] = useState("");
    const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFilePreview(e.target.files[0]);
    console.log(file);
  };
    
    
  return (
      <Box className={styles.trackMedicine_main}>
          
          <Box className={styles.header}>
              
            <h1 className={styles.title}>Track your Medicine</h1>  
              
          </Box>
      
          <Box className={styles.container}>
            <Box className={styles.dragDropZone}>
          
                  {/* <IconUpload size={50} stroke={1.5} color={"cyan"} /> */}
                  <p className={styles.dragDropZoneMessage}>Choose a File</p>
                  <label className={styles.dragDropZoneLabel} for="fileUpload">
                    Browse
                  </label>
                  <input
                    className={styles.dragDropZoneFileInput}
                    type="file"
                    id="fileUpload"
                    onChange={handleFileUpload}
                  />
 

        </Box>
        
        <Box className={styles.card_container}>
          <h2>Medicine Information</h2>
          <p>Name - <span>Mahin</span></p>
          <p>Key -  <span>dsahfhgfhghujhqf536</span></p>
          <p>Stakeholder - <span>Manufacturer</span></p>
      </Box>
        
       
            
        </Box>
          
        
          
    </Box>
  )
}

export default TrackMedicine


