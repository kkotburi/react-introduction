import React from "react";

export default function App() {
  const number = 1;

  const pTagStyle = {
    color: "red",
  };
  return (
    <div className="test-class">
      <p className={pTagStyle}>Hello, React!</p>
      {/* 주석 사용법 */}
      {/* 삼항 연산자 사용 */}
      <p className={pTagStyle}>
        {number > 10 ? number + "은 10 보다 크다" : number + "은 10 보다 작다"}
      </p>
    </div>
  );
}
