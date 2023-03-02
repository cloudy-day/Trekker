import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import styles from './Auth.module.css'

const authElement = [
    {
        id:1,
        title:"Consumre",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:2,
        title:"Manufacturer",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:3,
        title:"Supplier",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]
const Auth = ({ setUser }) => {
  
  const navigate = useNavigate();

  

  return (
    <>
    <Box className={styles.auth_main}>
        <Box className={styles.card_container}>
            {
              authElement.map((auth)=>(
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="240"
                          image="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {auth.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                        {auth.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => { setUser(auth.title); navigate('/login')}} variant="contained" sx={{}}>{auth.title}</Button>
                        </CardActions>
                      </Card>
                ))
            }
        </Box>
    </Box>
    </>
  )
}

export default Auth