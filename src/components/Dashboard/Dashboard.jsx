import { Box } from '@mui/material'
import React from 'react'
import styles from './Dashboard.module.css'

const cardElement = [
    {
        id: 1,
        count: '100+',
        stakeholder: 'Manufacturer'
    },
    {
        id: 2,
        count: '200+',
        stakeholder: 'Distributor'
    },
    {
        id: 3,
        count: '300+',
        stakeholder: 'Retailer'
    }
]

const Dashboard = () => {
  return (
      <Box className={styles.dashboard_main}>
          <Box  className={styles.card_container}>
              {
                  cardElement.map((card) => (
                        <Box className={styles.card}>
                            <Box className={styles.number_wrapper}>
                              <span className={styles.number}>{card.count}</span> 
                            </Box>
                          <p>{card.stakeholder}</p>
                        </Box>
                  ))
              }
          </Box>
    </Box>
  )
}

export default Dashboard