import React from "react";

// props 사용으로 자식 <- 부모 정보를 받음
function Child(props) {
  return <div>I'm {props.grandfatherName}'s grandson</div>;
}

function Father(props) {
  const name = props.grandfatherName;
  return <Child grandfatherName={name} />; // 아빠에서 자식으로 정보 전달
}

function GrandFather() {
  const name = "흥부";
  return <Father grandfatherName={name} />;
}

function App() {
  return <GrandFather />;
}

export default App;
