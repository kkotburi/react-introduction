import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 37, name: "송중기" },
    { id: 2, age: 29, name: "송강" },
    { id: 3, age: 23, name: "김유정" },
    { id: 4, age: 40, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHander = (event) => {
    setName(event.target.value);
  };

  const ageChangeHander = (event) => {
    setAge(event.target.value);
  };

  const clickAddButtonHandler = (event) => {
    // 1. 새로운 형태의 객체 생성
    const newUser = {
      id: useState.length + 1,
      name: name,
      age,
    };

    // 2. 배열에 추가
    setUsers([...users, newUser]);
  };

  return (
    <div className="app-style">
      <div>
        이름:&nbsp; <input value={name} onChange={nameChangeHander} />
        <br />
        나이:&nbsp; <input value={age} onChange={ageChangeHander} />
        <br />
        <button onClick={clickAddButtonHandler}>추가</button>
      </div>
      {users.map((item) => {
        return (
          <div key={item.id} className="app-style-square">
            {item.name}, {item.age}
          </div>
        );
      })}
    </div>
  );
};
export default App;

// <br /> 사용 금지
