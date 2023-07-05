import React from "react";

function App() {
  // 구조분해할당
  const testObj = {
    name: "JENNIE",
    age: 27,
    company: "YG",
  };

  const { name, age, company } = testObj;
  console.log("name:", name);
  console.log("age:", age);
  console.log("company:", company);

  return <div>App</div>;
}

export default App;
