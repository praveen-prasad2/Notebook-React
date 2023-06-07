import React, { useState } from "react";
import "./note.scss";
import Navbar from "../Navbar/Navbar";
import NoteCard from "./NoteCard";

function Note() {
  const data = JSON.parse(localStorage.getItem('notes'))
console.log(data)
  return (
    <>
<Navbar />

    <div className="note-main">
      <div className="note-container">
       {data && data?.map((n)=>(
        <div>
          <NoteCard notemap={n}/>
        </div>
       ))}
      </div>
    </div>
    </>
  );
}

export default Note;