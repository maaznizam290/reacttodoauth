import { Box, TextField } from '@mui/material';
import React, { useState } from 'react'
import { signupUser } from '../config/firebasemethods'

function Signup() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
        signupUser({
          email,
          password,
          userName:'Muhammad Maaz Nizam',
          contact:'12345759'
        })
        .then((success)=>{
        console.log(success)
    }).catch((error)=>{
        console.log(error);
    })
  return (
    <>
    <Box>
      <h1>Signup</h1>
    <Box> 
    <TextField label='Email' onChange={(e)=>setEmail(e.target.value)}
    variant='standard'/> </Box>
    <Box>
    <TextField label='Password' type='password' onChange={(e)=>setPassword(e.target.value)}
    variant='standard'/> </Box>
    </Box>
    <button style={{margin:'33px'}} onClick={signupUser}>sign Up</button>
    </>
  )
}
export default Signup;