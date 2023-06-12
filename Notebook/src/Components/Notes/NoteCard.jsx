import React, { useState } from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

import "./notecard.scss";
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

function NoteCard({ notemap }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(notemap.title);
  const [editedDesc, setEditedDesc] = useState(notemap.desc);

  function deleteNote() {
    console.log("Clicked On Delete Button");
    let allNotes = JSON.parse(localStorage.getItem("notes"));

    let updatedNotes = allNotes.filter((note) => note.id !== notemap.id);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    window.location.reload()
  }

  function saveNote() {
    console.log("Clicked On Save Button");
    let allNotes = JSON.parse(localStorage.getItem("notes"));

    let updatedNotes = allNotes.map((note) => {
      if (note.id === notemap.id) {
        return {
          ...note,
          title: editedTitle,
          desc: editedDesc
        };
      }
      return note;
    });

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setIsEditing(false);
    window.location.reload()
  }

  return (
    <>
      <div className="notecard-outline">
        <div className="notecard-heading">
          {isEditing ? (
            <TextField
              type="text"

              className='edit-title'
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            <h1 className='note-title'>{notemap.title}</h1>
          )}
        </div>
        <div className="notecard-content">
          {isEditing ? (
            <TextField type='text' className='edit-desc'
              value={editedDesc}
              multiline
              rows={5}
              onChange={(e) => setEditedDesc(e.target.value)}
            />
          ) : (
            <div className="desc-area">

                <p>{notemap.desc} <Link to={`/singlenote/${notemap.id}`} className='load-more'>...Load more.</Link> </p>
            </div>
          )}
        </div>
        <div className="notecard-buttons">
          {isEditing ? (
            <button className='edit-button' onClick={saveNote}>UPDATE</button>
          ) : (
            <>
            <div className="icons">

              <EditIcon className='icon' onClick={() => setIsEditing(true)} />
              <DeleteIcon  className='icon' onClick={deleteNote} />
            </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default NoteCard;
