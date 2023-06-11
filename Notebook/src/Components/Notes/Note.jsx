import React, { useEffect, useState } from "react";
import "./note.scss";
import Navbar from "../Navbar/Navbar";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Pagination from "../Pagination/Pagination";

function Note() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [singlePageData, setSinglePageData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("notes"));
    setData(storedData || []);
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setSinglePageData(data.slice(startIndex, endIndex));
    setTotalItems(data.length);
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar />
      <div className="note-main">
        <div className="note-container">
          {singlePageData.map((n) => (
            <div key={n.id}>
              <NoteCard notemap={n} />
            </div>
          ))}
        </div>
        <Link to="/addnote">
          <button className="add-new-note">
            Add Note <AddIcon />
          </button>
        </Link>
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Note;
