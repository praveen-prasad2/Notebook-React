import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Button, TextField } from '@mui/material'

import "./editnote.scss"

function EditNote() {
  return (
    <>
    <Navbar />
            <div className='edit-main'>
                    <h1>EDIT YOUR NOTE</h1>
                <div className="inputs-edit">

                    <TextField id="standard-basic" label="Title" variant="standard"   /><br />
                    <TextField id="standard-basic" label="Content" variant="standard"    multiline rows={8} /><br /><br />
                </div>
                <div className="buttons-edit">
                <Button variant="contained" className='btn' >Submit</Button>
                </div>

            </div>
            </>
  )
}

export default EditNote