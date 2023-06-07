import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

import "./notecard.scss"

function NoteCard({notemap}) {
  return (
    <>
    <div className="notecard-outline">
    <div className="notecard-heading">
    <h1>{notemap.title}</h1>
    </div>
    <div className="notecard-content">
        <p>{notemap.desc}</p>
    </div>
    <div className="notecard-buttons">
    <EditIcon  />
    <DeleteIcon  />
    </div>
</div>
</>
  )
}

export default NoteCard