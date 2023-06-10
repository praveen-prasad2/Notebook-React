import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

import "./addnote.scss";

function AddNote() {
  const [note, setNote] = useState([]);

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  

  // localStorage.setItem("notes", JSON.stringify(note));

  //use conditional instead
  useEffect(() => {
    if (note) {
    setNote(localStorage.getItem("notes"));
    console.log(typeof(localStorage.getItem("notes")));
    // localStorage.setItem("notes",[])

    }
  }, []);

  const randomId = function (length = 6) {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  };

  const id = randomId();

  const handleCreate = () => {
    setNote([...note, { id: id, title: title, desc: desc }]);
    localStorage.setItem("notes",([...note, { id: id, title: title, desc: desc }]))
    setTitle("");
    setDesc("");
  };

  // const data = JSON.parse(localStorage.getItem("notes"));
  // console.log(data);

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
}

export default AddNote;