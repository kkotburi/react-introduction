import React from "react";
import "./App.css";

const App = () => {
  // const style = {
  //   padding: "100px",
  //   display: "flex",
  //   gap: "10px",
  // };

  // const styleSquare = {
  //   height: "100px",
  //   width: "100px",
  //   border: "1px solid green",
  //   borderRadius: "10px",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };

  const vegetableArr = ["감자", "고구마", "오이", "가지", "옥수수"];

  // return (
  //   <div className="app-style">
  //     {vegetableArr.map((item) => {
  //       return <div className="app-style-square">{item}</div>;
  //     })}
  //     {/* <div className="app-style-square">감자</div>
  //     <div className="app-style-square">고구마</div>
  //     <div className="app-style-square">오이</div>
  //     <div className="app-style-square">가지</div>
  //     <div className="app-style-square">옥수수</div> */}
  //   </div>
  // );

  // const vegetableArr = ["감자", "고구마", "오이", "가지", "옥수수"];
  // const vegetable = vegetableArr.map((item) => {
  //   return <div className="app-style-square">{item}</div>;
  // });

  // return <div className="app-style">{vegetable}</div>;

  // filter 함수 사용
  const filterCucumber = vegetableArr.filter((item) => {
    return item !== "오이";
  });

  return (
    <div className="app-style">
      {filterCucumber.map((item) => {
        return <div className="app-style-square">{item}</div>;
      })}
    </div>
  );
};
export default App;
