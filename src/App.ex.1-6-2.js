import React from "react";
function App() {
  // <---- 자바스크립트 영역 ---->
  // function onClickButtonHandler() {
  //   alert("click");
  // }
  const onClickButtonHandler = () => {
    alert("click");
  };
  return (
    /* <---- HTML/JSX 영역  ---->*/
    <div
      className={{
        height: "100vh",
        display: " flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 이곳에 퀴즈를 위한 html 코드를 작성해 주세요 */}
      이것은 내가 만든 App component 입니다.
      <button onClick={onClickButtonHandler}>click</button>
    </div>
  );
}

export default App;
