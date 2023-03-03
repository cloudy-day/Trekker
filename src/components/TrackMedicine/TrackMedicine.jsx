import React,{useEffect, useState} from 'react'
import { Box } from '@mui/material'
import styles from './TrackMedicine.module.css'
import { HiOutlineUpload } from "react-icons/hi";
import { IoTrashOutline, IoDocumentTextOutline } from "react-icons/io5";
import TransactionLists from './TransactionLists';



const TrackMedicine = () => {
  const [trnasactions, setTransactions] = useState([12])

    const [filePreview, setFilePreview] = useState(null);
    const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFilePreview(e.target.files[0]);
    console.log(file.name);
  };
  useEffect(()=>{
    console.log(filePreview)
  },[filePreview])
  return (
      <Box className={`${styles.trackMedicine_main} ${trnasactions.length>0?styles.new_trackMedicine_main:""}`}>
          
        <Box className={styles.box}>
        <Box className={styles.header}>
              
              <h1 className={styles.title}>Track your Medicine</h1>  
                
            </Box>
        
            <Box className={styles.container}>
              <Box className={styles.dragDropZone}>
                <HiOutlineUpload/>
                    <p className={styles.dragDropZoneMessage}>Choose a File</p>
                    <label className={styles.dragDropZoneLabel} htmlFor="fileUpload">
                      Browse
                    </label>
                    <input
                      className={styles.dragDropZoneFileInput}
                      type="file"
                      id="fileUpload"
                      onChange={handleFileUpload}
                    />
          </Box>
         {
          filePreview && 
          <Box className={styles.img_detail}>
          <IoDocumentTextOutline style={{marginRight:".6rem", fontSize:"1.2rem"}}/>
          <span>
            {filePreview.name}
          </span>
          <IoTrashOutline onClick={()=> setFilePreview(null)} style={{marginLeft:".6rem", fontSize:"1.2rem", cursor:"pointer"}}/>
        </Box>
         }
          <button className={styles.btn}>Upload</button>
        </Box>
        </Box>

        <TransactionLists/>        
    </Box>
  )
}

export default TrackMedicine


