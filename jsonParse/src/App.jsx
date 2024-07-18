import { useEffect } from "react";
import SimpleObj from "./SimpleObj";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);


  return (
    <>
      <div>
        <h1>Product List</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
