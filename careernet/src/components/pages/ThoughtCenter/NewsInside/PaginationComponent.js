import { useEffect, useState } from "react";
import "./PaginationComponent.css";

const PaginationComponent = ({ totalPosts, postsPerPage, currentPage, setCurrentPage }) => {
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (activePage > 1) {
      handlePageClick(activePage - 1);
    }
  };

  const goToNextPage = () => {
    if (activePage < pages.length) {
      handlePageClick(activePage + 1);
    }
  };

  return (
    <div className="pagination">
      {activePage !== 1 && (
        <button onClick={goToPreviousPage}>&lt; Prev Page</button>
      )}
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(page)}
          className={page === activePage ? "active" : ""}
        >
          {page}
        </button>
      ))}
      {activePage !== pages.length && (
        <button onClick={goToNextPage}>Next Page &gt;</button>
      )}
    </div>
  );
};

export default PaginationComponent;
