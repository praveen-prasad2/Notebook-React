import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from "../Navbar/Navbar"
import "./signup.scss"
import { useNavigate } from 'react-router-dom';

function Signup() {

  const [fullName,setFullname]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  const[signupedUser,setSignupedUSer]=useState()

  const navigate=useNavigate()

  async function userSignup(){

    if(fullName && email && password){
      localStorage.setItem("fullname",fullName)
      localStorage.setItem("email",email)
      localStorage.setItem("password",password)
      localStorage.setItem("signup",email)

      alert("Account created successfully")
      navigate("/signin")
    }
    // console.log(fullName+email+password);
  
  }
  return (
    <>
    <Navbar/>
    <div className="signup-wrapper">
        <h1 className="signup-heading">Signup</h1>
        <div className="signup-inputs">
        <TextField id="standard-basic" label="Fullname" variant="standard" type='text' onChange={(f) => setFullname(f.target.value)} /><br />
        <TextField id="standard-basic" label="Email" variant="standard" type='email' onChange={(e) => setEmail(e.target.value)} /><br />
        <TextField id="standard-basic" label="Password" variant="standard" type='password' onChange={(p) => setPassword(p.target.value)} /><br /><br />
        </div>
        <div className="signup-buttons">
        <Button variant="contained" onClick={userSignup}>Signup</Button>
        </div>
    </div>
    </>
  )
}

export default Signup