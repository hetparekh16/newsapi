import React, { useState } from "react";
import NavbarDash from "./NavbarDash";
import axios from "axios";
import { useEffect } from "react";
import NewsCardsList from "./NewsCardsList";
import NewsDisplay from "./NewsDisplay";
export default function Dashboard() {
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=2eee88416af44a4da468d846a704af40"
      )
      .then((res) => setNewData(res.data.articles))
      .catch((err) => console.log("err"));
  }, []);

  return (
    <>
      <NavbarDash />
      <hr />
      <NewsDisplay newsData={newData} />
      <hr />
      <NewsCardsList newsData={newData}></NewsCardsList>
    </>
  );
}
