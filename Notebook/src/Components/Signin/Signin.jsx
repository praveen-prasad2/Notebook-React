import React from 'react'
import { Button, TextField } from '@mui/material'
import "./signin.scss"
import Navbar from '../Navbar/Navbar'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {

const emailRef=useRef()
const passRef=useRef()

const navigate=useNavigate()

  const localEmail=localStorage.getItem("email")
  const localPassword=localStorage.getItem("password")

  async function userSignin(){

    if(emailRef.current.value==localEmail && passRef.current.value==localPassword){
        navigate("/addnote")
    }else{
      alert("check login details")
    }
  }

  return (
<>
    <Navbar />
    <div className="signin-wrapper">
    <h1 className="signin-heading">Signin</h1>
    <div className="signin-inputs">
    <TextField id="standard-basic" label="Email" variant="standard" type='email' inputRef={emailRef}/><br />
    <TextField id="standard-basic" label="Password" variant="standard" type='password' inputRef={passRef} /><br /><br />
    </div>
    <div className="signin-buttons">
    <Button variant="contained" onClick={userSignin}>Signin</Button>
    </div>
</div>
</>
  )
}

export default Signin