import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

function Navbar() {



  return (
    <>
      <div className="navbar">
        <div className="head">
        <img src="\src\assets\notes-svgrepo-com.svg" alt="" />
            <h1>
               NOTEBOOK
          </h1>
        </div>
        <div className="options">
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="/notes">All Notes</Link>
          <Link to="#">Contact</Link>         
        </div>
      </div>
     
    </>
  )
}

export default Navbar