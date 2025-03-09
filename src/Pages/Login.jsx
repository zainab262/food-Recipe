import { useState } from "react"
import React from 'react'
import "../styles/logn.css"

function Login() {
    let [email,setEmail]=useState()
    let [password,setPassword]=useState()
  return (
    <div className='login-form'>

      <h2>Login</h2>
      <input type='text' 
      placeholder='Enter Name'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      ></input>
      <input type='password'
       placeholder='Enter Password'
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
      ></input>
      <button>Login</button>

    </div>
  )
}

export default Login


