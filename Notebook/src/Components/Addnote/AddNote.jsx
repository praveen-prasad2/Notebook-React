import React from "react";
import Navbar from "../Navbar/Navbar";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

import "./addnote.scss";

function AddNote() {
  // const [note, setNote] = useState({
  //   title: "",
  //   description: "",
  // });
  const [note, setNote] = useState([])
  const [title, setTitle] = useState({})
  const [desc, setDesc] = useState({})

  async function createNote() {
    setNote([...note,{head:title,description:desc}])
    localStorage.setItem("note", JSON.stringify(note));
    console.log(note);
  }
  return (
    <>
      <Navbar />
      <div className="addnote-wrapper">
        <h1 className="addnote-heading">Add Note</h1>
        <div className="addnote-inputs">
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            type="text"
            onChange={(e) => setTitle( e.target.value )}
            
          />
          <br />
          <TextField
            id="standard-basic"
            label="Description"
            multiline
            rows={5}
            variant="standard"
            type="text"
            onChange={(e) => setDesc( e.target.value )}
          />
          <br />
          <br />
        </div>
        <div className="addnote-buttons">
          <Button variant="contained" onClick={createNote}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddNote;