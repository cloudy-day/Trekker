import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import styles from './Profile.module.css'
import ContractAbi from '../../abis/User.json'
import { loadWeb3 } from '../../utils/loadWeb3'
import getProfile from '../../utils/account'

const Profile = () => {

  const [name, setName] = useState("");
  const [key, setKey] = useState("");
  const [stakeholder, setStakeholder] = useState("");

  const getUserData = async () => {

    const { data, account } = await getProfile();
    
    setKey(account);
    console.log(account);
    
    if (data) {
      setName(data[0]);
      setStakeholder(data[1]);
    }
    
  };

  useEffect(() => {
    loadWeb3();
    window.ethereum.on('accountsChanged', function (accounts) {
      getUserData();
    });
    getUserData();
    
  },[]);
  return (
    <Box className={styles.profile_main}>

      <Box className={styles.card_container}>
          <h2>User Information</h2>
          <p>Name - <span>{name}</span></p>
          <p>Key -  <span>{key}</span></p>
          <p>Stakeholder - <span>{stakeholder}</span></p>
      </Box>
          
    </Box>
  )
}

export default Profile