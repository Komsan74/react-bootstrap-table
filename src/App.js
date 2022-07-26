import { useEffect, useState } from "react";
import Table from "./component/Table";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  // get fake data from fakestoreapi.com
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  // console.log({data});

  return (
    <div className="App">
      <h1>Table with react-bootstrap sample</h1>
      <h2>Get fake data from https://fakestoreapi.com</h2>
      <Table data={data} header={["#", "Title", "Category", "Price"]} />
    </div>
  );
}
