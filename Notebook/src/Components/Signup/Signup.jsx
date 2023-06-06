import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./signup.scss"

function Signup() {
  return (
    <div className="signup-wrapper">
        <h1 className="signup-heading">Signup</h1>
        <div className="signup-inputs">
        <TextField id="standard-basic" label="Fullname" variant="standard" type='text' /><br />
        <TextField id="standard-basic" label="Email" variant="standard" type='email' /><br />
        <TextField id="standard-basic" label="Password" variant="standard" type='password' /><br /><br />
        </div>
        <div className="signup-buttons">
        <Button variant="contained">Signup</Button>
        </div>
    </div>
  )
}

export default Signup