import React from "react";
import NewsCards from "./NewsCards";
import "./GeneralCSS.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Pagination from "./Pagination";
const NewsCardsList = ({ newsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * 6;
  const firstPostIndex = lastPostIndex - 6;
  const currentPosts = newsData.slice(firstPostIndex, lastPostIndex);
  return (
    <Container>
      <div className="card_grid">
        <NewsCards newsData={currentPosts}></NewsCards>
      </div>
      <Pagination
        totalPosts={newsData.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default NewsCardsList;
