import React from "react";
const Pagination = ({ totalPosts, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / 6); i++) {
    pages.push(i);
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {pages.map((page, index) => {
            return (
              <li
                className={page === currentPage ? "active" : ""}
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => setCurrentPage(page)}
              >
                <p className="page-link">{page}</p>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
