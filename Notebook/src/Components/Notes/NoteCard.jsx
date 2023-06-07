import React from 'react'

function NoteCard({notemap}) {
  return (
    <div className="notecard-wrapper">
        <h1>{notemap.title}</h1>
    </div>
  )
}

export default NoteCard