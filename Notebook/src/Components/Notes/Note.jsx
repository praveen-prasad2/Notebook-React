import React from 'react'
import "./note.scss"

function Note() {


    const title=localStorage.getItem("title")
    const description=localStorage.getItem("desc")
  return (
    <div className="note-main">
        <div className="note-container">
            
        </div>
    </div>
  )
}

export default Note