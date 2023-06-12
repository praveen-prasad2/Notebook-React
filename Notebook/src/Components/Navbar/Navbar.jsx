import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '../SearchBar/SearchBar';

function Navbar() {
  const [renderSearch, setRenderSearch] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const path = window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (path === '/notes') {
      setRenderSearch(true);
    }
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="head">
          <img src="\src\assets\notes-svgrepo-com.svg" alt="" />
          <h1>NOTEBOOK</h1>
        </div>
        <div className="options">
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="/notes">All Notes</Link>
          <Link to="#">Contact</Link>
          {renderSearch && (
            <SearchIcon onClick={() => setShowSearch(true)} />
          )}
        </div>
      </div>
      {showSearch && <SearchBar setShowSearch={setShowSearch} />}
    </>
  );
}

export default Navbar;
