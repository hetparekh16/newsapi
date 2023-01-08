import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./GeneralCSS.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const NewsDisplay = () => {
  const [featureData, setFeatureData] = useState([]);
  const [semiFeatured1, setSemiFeatured1] = useState([]);
  const [semiFeatured2, setSemiFeatured2] = useState([]);
  const [semiFeatured3, setSemiFeatured3] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=2eee88416af44a4da468d846a704af40"
      )
      .then((res) => {
        setFeatureData(res.data.articles[1]);
        setSemiFeatured1(res.data.articles[2]);
        setSemiFeatured2(res.data.articles[3]);
        setSemiFeatured3(res.data.articles[4]);
      })
      .catch((err) => console.log("err"));
  }, []);

  return (
    <>
      <Container>
        <h1 className="mb-2">Featured Articles</h1>
        <div className="d-flex justify-content-center mt-2">
          <div className="part-1">
            <img src={featureData.urlToImage} alt="" />
            <h4>{featureData.title}</h4>
            <p>{featureData.description}</p>
          </div>
          <div className="part-2">
            <div className="cardNews">
              <img src={semiFeatured1.urlToImage} alt="" />

              <h4>{semiFeatured1.title}</h4>
            </div>

            <div className="cardNews">
              <img src={semiFeatured2.urlToImage} alt="" />

              <h4>{semiFeatured2.title}</h4>
            </div>

            <div className="cardNews">
              <img src={semiFeatured3.urlToImage} alt="" />

              <h4>{semiFeatured3.title}</h4>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewsDisplay;
