import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Button, TextField } from "@mui/material";

import "./addnote.scss"

const App = () => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const randomId = (length = 6) => {
    return Math.random().toString(36).substring(2, length + 2);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    // localStorage.setItem("notes",[])
  }, [notes]);

  const handleCreate = () => {
    const id = randomId();
    const newNote = { id: id, title: title, desc: desc };
    setNotes([...notes, newNote]);
    setTitle("");
    setDesc("");
    console.log(newNote);
  };

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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Description"
            multiline
            rows={5}
            variant="standard"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div className="addnote-buttons">
          <Button variant="contained" onClick={handleCreate}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default App;
