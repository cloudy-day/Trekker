import React,{useEffect, useState} from 'react'
import { Box } from '@mui/material'
import styles from './TrackMedicine.module.css'
import { HiOutlineUpload } from "react-icons/hi";
import { IoTrashOutline, IoDocumentTextOutline } from "react-icons/io5";
import TransactionLists from './TransactionLists';
import QrScanner from 'qr-scanner';

import ContractAbi1 from '../../abis/Medicine.json'
import ContractAbi2 from '../../abis/Transaction.json'


const TrackMedicine = () => {
  const [tranDetails, setTranDetails] = useState([]);
  const [medDetails, setMedDetails] = useState([]);
  const [medicineName, setMedicineName] = useState("");
  const [batchNo, setBatchNo] = useState("");
  const [filePreview, setFilePreview] = useState(null);


  const handleFileUpload = async (e) => {
    
    const file = e.target.files[0];
    setFilePreview(e.target.files[0]);
    console.log(file.name);
    const data = await QrScanner.scanImage(file);
    let arr = data.split('-');
    // console.log(arr[0].toString().toLowerCase().trim());
    // console.log(arr[1].toString().toLowerCase().trim());
    setMedicineName(arr[0].toString().toLowerCase().trim());
    setBatchNo(arr[1].toString().toLowerCase().trim());

  };

  const handleButtonClick = async(e) => {

    if (medicineName && batchNo) {

      console.log(medicineName + batchNo);

      try {

          const web3 = window.web3;
          const account = await web3.eth.getAccounts();
          const networkID = await web3.eth.net.getId();
          // console.log(account);
          const networkData1 = ContractAbi1.networks[networkID];

          if (networkData1) {
            
            const contract1 = new web3.eth.Contract(
              ContractAbi1.abi,
              networkData1.address
            );

            const medicineDetails = await contract1.methods.getMedicineDetails(
              medicineName.toString(), batchNo.toString()).call();
            
            console.log(medicineDetails);
            setMedDetails(medicineDetails);

          }

          const networkData2 = ContractAbi2.networks[networkID];

          if (networkData2) {

            const contract2 = new web3.eth.Contract(
              ContractAbi2.abi,
              networkData2.address
            );

            const transactionDetails = await contract2.methods.getTransaction(
              medicineName.toString(), batchNo.toString()).call();
            
            console.log(transactionDetails);
            setTranDetails(transactionDetails);
            
          }


        
      } catch (e) {
        console.log(e);
      }
      
    }
    


    
  };


  useEffect(()=>{
    console.log(filePreview)
  }, [filePreview])
  

  return (
      <Box className={`${styles.trackMedicine_main} ${(tranDetails.length || medDetails.length)>0?styles.new_trackMedicine_main:""}`}>
          
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
          <button className={styles.btn} onClick={handleButtonClick}>Upload</button>
        </Box>
        </Box>

      <TransactionLists medData={medDetails} tranData={tranDetails} />        
    </Box>
  )
}

export default TrackMedicine




    