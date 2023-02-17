import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData([...json]);
        return console.log(json);
      });
  }, []);

  return (
    <div>
      <h3>JSONPlacehorder</h3>
      {data.map(function (item) {
        return (
          <div style={{ border: "1px solid black" }}>
            <ul>
              <li>{item.userId}</li>
              <li>{item.id}</li>
              <li>{item.title}</li>
              <li>{item.body}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
