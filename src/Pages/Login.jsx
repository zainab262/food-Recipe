import { useState } from "react"
import React from 'react'
import "../styles/logn.css"
import { Grid,Heading ,Input,Button} from "@chakra-ui/react"

function Login() {
    let [email,setEmail]=useState()
    let [password,setPassword]=useState()
  return (
    // <div className='login-form'>
    <Grid border={'1px solid blue'} borderRadius={'5px'} w={'40%'} p={'30px'} gap={'10px'} m={'auto'} mt={'5rem'}>

      <Heading color={'blue.500'} textAlign={'center'}>Login</Heading>
      <Input border={'1px solid blue'} type='text' 
      placeholder='Enter Name'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      ></Input>
      <Input border={'1px solid blue'} type='password'
       placeholder='Enter Password'
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
      ></Input>
      <Button color={'white'} bg={'blue.600'} border={' 1px solid blue'} borderRadius={'10px'}>Login</Button>
    </Grid>  

    // </div>
  )
}

export default Login


