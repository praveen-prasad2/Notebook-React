import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

function Navbar() {



  return (
    <>
      <div className="navbar">
        <div className="head">
          <h1>
            <img src="" alt="" />NOTEBOOK
          </h1>
        </div>
        <div className="options">
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Resources</Link>
          <Link to="#">Contact</Link>         
        </div>
      </div>
     
    </>
  )
}

export default Navbar