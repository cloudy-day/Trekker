import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import styles from './Profile.module.css'
import ContractAbi from '../../abis/User.json'
import {loadWeb3} from '../../utils/loadWeb3'

const Profile = () => {

  const [name, setName] = useState('DRB');
  const [key, setKey] = useState('0xdhgjnlsabvhbcksjfhhs');
  const [stakeholder, setStakeholder] = useState('Regulatory Body');

  const getUserData = async () => {

    const web3 = window.web3;
    const account = await web3.eth.getAccounts();
    const networkID = await web3.eth.net.getId();
    console.log(account);
    setKey(account);
    const networkData = ContractAbi.networks[networkID];

    if (networkData) {

      const contract = new web3.eth.Contract(
        ContractAbi.abi,
        networkData.address
      );

      const data = await contract.methods.readStakeholder(account[0]).call();
      console.log(data)
      console.log(data.name + data.typ);
      if (data) {
        setName(data[0]);
        setStakeholder(data[1]);
      }
    
    }
    
  };

  useEffect(() => {
    loadWeb3();
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