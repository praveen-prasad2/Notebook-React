import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Button, TextField } from '@mui/material'

import "./addnote.scss"

function AddNote() {
  return (
    <>
    <Navbar />
    <div className="addnote-wrapper">
    <h1 className="addnote-heading">Add Note</h1>
    <div className="addnote-inputs">
    <TextField id="standard-basic" label="Title" variant="standard" type='text' /><br />
    <TextField id="standard-basic" label="Description"  multiline rows={5} variant="standard" type='text' /><br /><br />
    </div>
    <div className="addnote-buttons">
    <Button variant="contained">Save</Button>
    </div>
</div>
</>
  )
}

export default AddNote