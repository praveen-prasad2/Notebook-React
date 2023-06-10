import React, { useState } from "react";
import "./note.scss";
import Navbar from "../Navbar/Navbar";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

function Note() {
  const storedData = localStorage.getItem('notes');
  const data = storedData ? JSON.parse(storedData) : [];

  return (
    <>
      <Navbar />
      <div className="note-main">
        <div className="note-container">
          {data.map((n) => (
            <div key={n.id}>
              <NoteCard notemap={n} />
            </div>
          ))}
        </div>
        <Link to="/addnote">
          <button className="add-new-note">Add Note <AddIcon/></button>
        </Link>
      </div>
    </>
  );
}

export default Note;
