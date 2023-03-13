import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'

import ContractAbi from '../../abis/User.json'

const cardElement = [
    {
        id: 1,
        count: '100',
        stakeholder: 'Manufacturer'
    },
    {
        id: 2,
        count: '200',
        stakeholder: 'Distributor'
    },
    {
        id: 3,
        count: '300',
        stakeholder: 'Retailer'
    }
]

const Dashboard = () => {

    const [manu, setManu] = useState(100);
    const [dis,  setDis] = useState(100);
    const [ret,  setRet] = useState(100);

    const getNumbeofUser = async () => {
        const web3 = window.web3;
        const account = await web3.eth.getAccounts();
        const networkID = await web3.eth.net.getId();
        const networkData = ContractAbi.networks[networkID];

        if (networkData) {
            
            const contract = new web3.eth.Contract(
                ContractAbi.abi,
                networkData.address
            );

            
            const manu = await contract.methods.numberofStakeholder("Manufacturer").call();
            setManu(manu);
            const dis = await contract.methods.numberofStakeholder("Distributor").call();
            setDis(dis);
            const ret = await contract.methods.numberofStakeholder("Retailer").call();
            setRet(ret);
            

        }

    }

    useEffect(() => { 
        getNumbeofUser();
    }, []);

  return (
      <Box className={styles.dashboard_main}>
          <Box  className={styles.card_container}>
                <Box className={styles.card}>
                    <Box className={styles.number_wrapper}>
                      <span className={styles.number}>{manu}</span> 
                    </Box>
                    <p>Manufacturer</p>
                </Box>
                <Box className={styles.card}>
                    <Box className={styles.number_wrapper}>
                      <span className={styles.number}>{dis}</span> 
                    </Box>
                    <p>Distributor</p>
                </Box>
                <Box className={styles.card}>
                    <Box className={styles.number_wrapper}>
                      <span className={styles.number}>{ret}</span> 
                    </Box>
                    <p>Retailer</p>
                </Box>
          </Box>
    </Box>
  )
}

export default Dashboard