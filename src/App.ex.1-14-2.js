import React, { useState } from "react";

function App() {
  const [obj, setObj] = useState({
    name: "JENNIE",
    age: 27,
  });
  return (
    <div>
      <div>{obj.name}</div>
      <button
        onClick={() => {
          // obj.name = "ROSE";
          // console.log(obj);
          // setObj(obj);

          // 새로운 객체 생성 (순서 주의)
          obj.name = "ROSE";
          const obj2 = { ...obj };
          setObj(obj2);
        }}
      >
        변경
      </button>
    </div>
  );
}

export default App;
