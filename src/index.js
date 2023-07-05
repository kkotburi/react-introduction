import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// 1-14
// 불변성 : 메모리에 있는 값을 변경할 수 없는 것
let number = 1;
let secondNumber = 1;

// 원시데이터 : 숫자, 문자, boolean …
console.log("number와 secondNumber가 일치한가?");
console.log(number === secondNumber);

// 비원시데이터 : 배열, 객체, 함수 …
let obj1 = {
  name: "kim",
};

obj1.name = "park"; // 객체는 불변성이 없습니다.
console.log(obj1.name);

let obj2 = {
  name: "kim",
};

console.log("obj1과 obj2가 일치한가?");
console.log(obj1 === obj2);
