import { Box } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import styles from './Login.module.css'
import { loadWeb3 } from '../../utils/loadWeb3';
const Login = () => {


  return (
    <Box className={styles.login_main}>
          
      <Button className={styles.btn} variant="contained"
      onClick={loadWeb3}
      >
        Connect Account
      </Button>
        
    </Box>
  )
}

export default Login



