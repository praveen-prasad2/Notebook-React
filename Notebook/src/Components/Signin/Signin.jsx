import React from 'react'
import { Button, TextField } from '@mui/material'
import "./signin.scss"

function Signin() {
  return (
    <div className="signin-wrapper">
    <h1 className="signin-heading">Signin</h1>
    <div className="signin-inputs">
    <TextField id="standard-basic" label="Email" variant="standard" type='email' /><br />
    <TextField id="standard-basic" label="Password" variant="standard" type='password' /><br /><br />
    </div>
    <div className="signin-buttons">
    <Button variant="contained">Signin</Button>
    </div>
</div>
  )
}

export default Signin