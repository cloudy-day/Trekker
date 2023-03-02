import React from 'react'
import { Box } from '@mui/material'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <Box className={styles.profile_main}>

      <Box className={styles.card_container}>
          <h2>User Information</h2>
          <p>Name - <span>Mahin</span></p>
          <p>Key -  <span>dsahfhgfhghujhqf536</span></p>
          <p>Stakeholder - <span>Manufacturer</span></p>
      </Box>
          
    </Box>
  )
}

export default Profile