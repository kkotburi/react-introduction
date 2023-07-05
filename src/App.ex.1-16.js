import React, { useState } from "react";

// 두 번 click 시 1 증가 및 감소
// function App() {
//   let [num, setNum] = useState(0);

//   const onClickPlus = () => {
//     return num++;
//   };

//   const onClickMinus = () => {
//     return num--;
//   };

//   return (
//     <div>
//       <div>{num}</div>
//       <button
//         onClick={() => {
//           setNum(onClickPlus);
//          }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           setNum(onClickMinus);
//         }}
//       >
//         -1
//       </button>
//     </div>
//   );
// }

export default App;

function App() {
  const [count, setNum] = useState(0);

  const onClickPlus = () => {
    const plusCount = count + 1;
    setNum(plusCount);
  };

  const onClickMinus = () => {
    const minusCount = count - 1;
    setNum(minusCount);
  };

  return (
    <div className={{ textAlign: "center" }}>
      <div>{count}</div>
      <button onClick={onClickPlus}>+1</button>
      <button onClick={onClickMinus}>-1</button>
    </div>
  );
}

// 화살표 함수 주의! TIL 20230614
// function()는 호출
// 괄호가 필요한 경우, () => function(인자)
