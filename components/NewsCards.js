import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const NewsCards = ({ newsData }) => {
  // console.log(newsData);
  return (
    <>
      {newsData &&
        newsData.map((newsItems) => {
          return (
            <Card key={newsItems.url} style={{ width: "22rem" }}>
              <Card.Img variant="top" src={newsItems.urlToImage} />
              <Card.Body>
                <Card.Title>{newsItems.title}</Card.Title>
                <Card.Text>{newsItems.description}</Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
};

export default NewsCards;
