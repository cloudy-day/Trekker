import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link,NavLink } from "react-router-dom"
import styles from "./Navbar.module.css";
import getProfile from '../../../utils/account'
import { loadWeb3 } from '../../../utils/loadWeb3';
import { useNavigate } from "react-router-dom";


// admin - 1
// manufacturer - 2
// distributor - 3
// retailer - 4
// consumer - 5


const navItems = [
  {
    id: 1,
    title: "Dashboard",
    link: "/adminDashboard",
    role: [1],
  },
  {
    id: 2,
    title: "Stakeholder",
    link: "/createStakeholder",
    role: [1],
  },
  {
    id: 3,
    title: "Medicine",
    link: "/createMedicine",
    role: [2],
  },
  {
    id: 4,
    title: "QR",
    link: "/generateQRCode",
    role: [2],
  },
  {
    id: 5,
    title: "Tracking",
    link: "/trackMedicine",
    role: [5],
  },
  {
    id: 6,
    title: "Transaction",
    link: "/createTransaction",
    role: [2,3,4],
  },
  {
    id: 7,
    title: "Profile",
    link: "/profile",
    role: [1,2,3,4],
  },
  {
    id: 8,
    title: "Login",
    link: "/login",
    role: [1,2,3,4],
  },
  {
    id: 9,
    title: "FAQ",
    link: "/faq",
    role: [5],
  },
  {
    id: 10,
    title: "Contact Us",
    link: "/contactUs",
    role: [5],
  },
];





const Navbar = () => {

  const navigate = useNavigate();

  const [role, setRole] = useState();

  const userData = async () => {
    
    try {

      const {data} = await getProfile();

      // console.log(data[1]);

      if (data[1] === "Regulatory Body") {
        setRole(1);
      }
      else if (data[1] === "Manufacturer") {
        setRole(2);
      }
      else if (data[1] === "Distributor") {
        setRole(3);
      }
      else if (data[1] === "Retailer") {
        setRole(4);
      }
      
    } catch (e) {
      setRole(5);
      // console.log(e);
    }
    
    
  }

  useEffect(() => {
    loadWeb3();
     window.ethereum.on('accountsChanged', function (accounts) {
      userData();
      navigate("/");
    });
    userData();
   }, []);

  return (
    <>
    <Box className={styles.main}>
      <AppBar sx={{bgcolor:"#EEEEEE", boxShadow:"none",width:"100%", display:"flex", justifyContent:"center",height:"80px"}} >
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
                {
                  navItems.map((nav) => (
                  nav.role.includes(role) ?
                    <li key={nav.id}>
                      <NavLink 
                          className={({ isActive }) =>
                          isActive ? styles.active_link : styles.link
                          }
                        to={nav.link}>
                        {nav.title}
                      </NavLink>
                    </li> : null
                  ))
                }
          </ul>
        </Box>
      </Box>
      </AppBar>
    </Box>

    </>
  )
}

export default Navbar

