import React, { useState } from "react";

// 리액트는 화면 렌더링 여부를 state의 변화에 따라 결정
// 단순 변수는 무시

function App() {
  const [input, setInput] = useState("");
  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  let count = 0;
  const onClickCount = () => {
    count++;
    console.log(`count는 ${count}입니다.`);
  };

  return (
    <div>
      <input value={input} onChange={onChangeInput}></input>
      {input}
      <button onClick={onClickCount}>증가</button>
      {count}
    </div>
  );
}

export default App;
