import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

import "./notecard.scss"


function NoteCard({notemap}) {

    async function deleteNote(noteid){
        let noteToDelete=[...notemap]
        let index=notemap.findIndex((n)=>{
            n.id===noteid;
            noteToDelete.splice(index,1)
            localStorage.setItem("notes",JSON.stringify(noteToDelete))
        })
    }
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
    <DeleteIcon  onClick={()=>deleteNote(notemap.id)} />
    </div>
</div>
</>
  )
}

export default NoteCard