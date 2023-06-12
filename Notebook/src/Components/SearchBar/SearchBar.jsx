import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import SingleNote from '../SingleNote/SingleNote';

import './searchbar.scss';

function SearchBar({ setShowSearch }) {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const results = notes.filter((note) =>
      note.title.toLowerCase().includes(keyword)
    );
    setSearchResults(results);
    setSelectedNote(null);
  };

  const handleNoteClick = (noteId) => {
    setSelectedNote(noteId);
    setShowSearch(false);
    navigate(`/singlenote/${noteId}`);
  };

  const getNoteDataById = (noteId) => {
    return notes.find((note) => note.id === noteId) || null;
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
          <CloseIcon className="close-icon" onClick={() => setShowSearch(false)} />
        </div>
        <div className="search-result-content">
          <div className="search-result">
            {searchResults.map((result) => (
              <div key={result.id} className="search-result-item">
                <Link
                  to={`/singlenote/${result.id}`}
                  className="note-details"
                  onClick={() => handleNoteClick(result.id)}
                >
                  <span className="name">{result.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedNote && <SingleNote noteId={selectedNote} />}
    </>
  );
}

export default SearchBar;
