import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
// import { MdClose } from "react-icons/md";
import CloseIcon from '@mui/icons-material/Close';

import "./searchbar.scss";

function SearchBar({ setShowSearch }) {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const results = [];

    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    for (const note of notes) {
      const lowercaseTitle = note.title.toLowerCase();
      if (lowercaseTitle.includes(keyword)) {
        results.push({ title: note.title, description: note.description });
      }
    }

    setSearchResults(results);
  };

  return (
    <>
      <div className="search-modal">
        <div className="form-field">
          <input
            type="text"
            autoFocus
            placeholder="Search Notes"
            onChange={handleSearch}
          />
          <CloseIcon onClick={() => setShowSearch(false)} />
        </div>
        <div className="search-result-content">
          <div className="search-result">
            {searchResults.map((result, index) => (
              <div key={index} className="search-result-item">
                <div className="note-details">
                  <span className="name">{result.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
