import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import "./singlenote.scss"

function SingleNote({ noteId }) {
  const [noteData, setNoteData] = useState(null);

const params=useParams()
console.log(params.id);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const selectedNote = notes.find((note) => note.id === params.id);
    setNoteData(selectedNote);
  }, [noteId]);

  if (!noteData) {
    return <div>No note data available.</div>;
  }

  return (
    <>
    <Navbar />
    <div className="singlenote-card">

    <div className='singlenote-head'>
      <h1>{noteData.title}</h1>
      </div>
      <div className="singlenote-content">
        
      <p>{noteData.desc}</p>
    </div>
    </div>
    </>
  );
}

export default SingleNote;
