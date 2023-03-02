import { Box } from '@mui/material'
import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <>
    <Box className={styles.hero_main}>
        <Box className={styles.detail_div}>
            <h1> Trekker</h1>
          <p>
            Trekker is a decentralised peer-to-peer network system to ensure
            Blockchain-based traceability of the supply chain for counterfeit medicines.
            </p>
        </Box>
    </Box>
    </>
  )
}

export default Hero