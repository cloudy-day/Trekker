import { Box } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import styles from './Login.module.css'
import { loadWeb3 } from '../../utils/loadWeb3';
import ContractAbi from "../../abis/Crud.json";
const Login = () => {
  const handleTransaction = async () => {
    
      const web3 = window.web3;
      const account = await web3.eth.getAccounts();
    const networkID = await web3.eth.net.getId();
    console.log(account);
      const networkData = ContractAbi.networks[networkID];
      if (networkData) {
        const contract = new web3.eth.Contract(
          ContractAbi.abi,
          networkData.address
        );
       const data =  await contract.methods
         .readItem(1).call();
        console.log(data)

      }
  
  };

  return (
    <Box className={styles.login_main}>
          
      <Button className={styles.btn} variant="contained"
      onClick={loadWeb3}
      >
        Connect Account
      </Button>
        <Button className={styles.btn} variant="contained"
      onClick={handleTransaction}
      >
        check
        </Button>
        
    </Box>
  )
}

export default Login