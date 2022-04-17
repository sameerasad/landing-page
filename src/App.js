import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(data);
  };

  console.log(data, "");
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
