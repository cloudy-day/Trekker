import { Box } from '@mui/material'
import React from 'react'
import styles from "./transactionlist.module.css";


const TransactionLists = ({ medData, tranData }) => {
  console.log(Object.keys(medData).length)

  return (
    <>
    <Box className={styles.transaction_main}>
        {/* information */}
        {
          Object.keys(medData).length > 0 && 
          <Box className={styles.details}>
            <h3>Manufacturer : <span>{medData.manufacturerName}</span></h3>
            <h3>Price : <span>{medData[2]}</span></h3>
            <h3>Manufacture : <span>{medData[3]}</span></h3>
            <h3>Expire : <span>{medData[4]}</span></h3>
          </Box>
     }

        {/* transactions */}

        <Box className={styles.transact}>
       {
        tranData.map((arr)=>(
          <Box  className={styles.transactList}>
          <Box className={styles.transact_ele}>
               <span>Provider name</span>
               <p>{arr[1]}</p>
           </Box>
           <Box className={styles.transact_ele}>
               <span>Receiver name</span>
               <p>{arr[3]}</p>
           </Box>
           <Box className={styles.transact_ele}>
               <span>Delivery Date</span>
              <p>{arr[6]}</p>
           </Box>
           </Box>
        ))
       }
        </Box>
    </Box>
    </>
  )
}

export default TransactionLists