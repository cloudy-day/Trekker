import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
    <Box className={styles.main}>
      <AppBar sx={{bgcolor:"#EEEEEE", boxShadow:"none",width:"100%", display:"flex", justifyContent:"center"}} >
      <Box sx={{
        width:"60%",
        margin:"0 auto",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
      }}>
        <Box className={styles.logo}>
          <Link to="/" className={styles.logo_link}>
          Trekker</Link>
        </Box>
        <Box className={styles.list_ele}>
          <ul>
                <li>
                  <Link className={styles.link} to="/adminDashboard">Dashboard</Link>
                </li>
                <li>
                  <Link className={styles.link} to="/createMedicine">Medicine</Link>
                </li>
                <li>
                  <Link className={styles.link} to="/generateQRCode">QR</Link>
                </li>
                <li>
                  <Link className={styles.link} to="/trackMedicine">Tracking</Link>
                </li>
                 <li>
                  <Link className={styles.link} to="/createTransaction">Transaction</Link>
                </li>
                {/* <li>
                  <Link className={styles.link} to="/auth">Auth</Link>
                </li> */}
                <li>
                  <Link className={styles.link} to="/createStakeholder">Stakeholder</Link>
                </li>
                <li>
                  <Link className={styles.link} to="/profile">Profile</Link>
                </li>
                <li>
                  <Link className={styles.link} to="/login">Login</Link>
                </li>
          </ul>
        </Box>
      </Box>
      </AppBar>
    </Box>

    </>
  )
}

export default Navbar