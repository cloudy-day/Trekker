import { Box } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
    <Box className={styles.footer_main}>
        <Box className={styles.footer_subdiv}>
            <Box className={styles.footer_left}>

                      <Box className={styles.footer_ele}>
                           <Link to="/" className={styles.logo_link}>
                          Trekker</Link>
                            <p>© 2023 Trekker. All Rights Reserved.</p>
                      </Box>        
                      
            </Box>
            <Box className={styles.footer_right}>
            <Box className={ styles.element}>
                          <h3>Who We Are</h3>
                          <p>About Us</p>
                          <p>Insights</p>
                </Box>
                <Box className={ styles.element}>
                          <h3>Products</h3>
                          <p>Drug Traceability</p>
                          <p>Fake  Medicine Detection</p>
                          <p>Supply Chain Management</p>
                </Box>
                <Box className={ styles.element}>
                          <h3>Loactions</h3>
                          <p>Sylhet, Bangladesh</p>
                </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Footer