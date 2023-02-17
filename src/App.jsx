import React, { useEffect, useState } from "react";

function App() {
  // JSON 으로 부터  가져온 데이털르 저장할 변수 state를 선언 [데이터가 배열 형태이기 때문에 기본값에 배열을 넣어줌]
  const [data, setData] = useState([]);

  //컴포넌트가 처음에 마운트 될 때 사용
  useEffect(() => {
    //fetch 라는 내장 함수로 읽어옴 , fetch로 가져오면 자바스크립트 형태로 남음
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        //state에 결과값 저장 ...으로 풀어주고 []을 사용해 다시 배열에 넣음 , 원래 배열이었으니까
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
