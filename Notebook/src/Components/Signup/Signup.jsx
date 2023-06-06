import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signup() {
  return (
    <div className="signup-wrapper">
        <div className="signup-inputs">
        <TextField id="standard-basic" label="Email" variant="standard" type='email' /><br />
        <TextField id="standard-basic" label="password" variant="standard" type='password' /><br /><br />
        </div>
        <div className="signup-buttons">
        <Button variant="outlined">Signup</Button>
        </div>
    </div>
  )
}

export default Signup