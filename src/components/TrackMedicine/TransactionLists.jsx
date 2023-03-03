import { Box } from '@mui/material'
import React from 'react'
import styles from "./transactionlist.module.css";

const newArray = [1,2,3,4,5,6] 
const TransactionLists = () => {
  return (
    <>
    <Box className={styles.transaction_main}>
        {/* information */}
        <Box className={styles.details}>
          <h3>Dosage : <span>Something</span></h3>
          <h3>Price : <span>Something</span></h3>
          <h3>Manufacture : <span>Something</span></h3>
          <h3>Expire : <span>Something</span></h3>
        </Box>

        {/* transactions */}

        <Box className={styles.transact}>
       {
        newArray.map((arr)=>(
          <Box  className={styles.transactList}>
          <Box className={styles.transact_ele}>
               <span>Provider name</span>
               <p>Mahinur Alam</p>
           </Box>
           <Box className={styles.transact_ele}>
               <span>Receiver name</span>
               <p>Mahinur Alam</p>
           </Box>
           <Box className={styles.transact_ele}>
               <span>Delivery Date</span>
               <p>12/12/23</p>
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