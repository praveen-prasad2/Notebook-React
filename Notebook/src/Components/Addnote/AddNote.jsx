import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Button, TextField } from '@mui/material'
import { useState ,useRef} from 'react'

import "./addnote.scss"

function AddNote() {

  const [noteTitle,setNoteTitle]=useState()
  const [noteDesc,setNoteDesc]=useState()

  const note={
    noteTitle,
    noteDesc
  }





  async function createNote(){

    if(noteTitle && noteDesc){
      localStorage.setItem("title",noteTitle)
      localStorage.setItem("desc",noteDesc)

      console.log(note);
    }




  }
  return (
    <>
    <Navbar />
    <div className="addnote-wrapper">
    <h1 className="addnote-heading">Add Note</h1>
    <div className="addnote-inputs">
    <TextField id="standard-basic" label="Title" variant="standard" type='text' onChange={(t) => setNoteTitle(t.target.value)} /><br />
    <TextField id="standard-basic" label="Description"  multiline rows={5} variant="standard" type='text' onChange={(d) => setNoteDesc(d.target.value)}/><br /><br />
    </div>
    <div className="addnote-buttons">
    <Button variant="contained" onClick={createNote}>Save</Button>
    </div>
</div>
</>
  )
}

export default AddNote