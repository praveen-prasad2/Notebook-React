import React, { useState } from "react";

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const [currentPageState, setCurrentPage] = useState(currentPage || 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const calculateTotalPages = () => {
    return Math.ceil(totalItems / itemsPerPage);
  };

  const totalPages = calculateTotalPages();

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={i === currentPageState ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  }; 

  return (
    <>

    <h1>cgsdcscj</h1>
    <ul className="pagination">
      {renderPageNumbers()}
    </ul>
    </>
  );
};

export default Pagination;
