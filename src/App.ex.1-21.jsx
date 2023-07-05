import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import User from "./components/User";

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

  // 추가 button
  const clickAddButtonHandler = () => {
    // 1. 새로운 형태의 객체 생성
    const newUser = {
      id: users.length + 1,
      name: name,
      age,
    };

    // console.log(useState.length);
    // TIL 20230614

    // 2. 배열에 추가
    setUsers([...users, newUser]);
  };

  // 삭제 button
  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div className="app-style">
      <div>
        이름:&nbsp; <input value={name} onChange={nameChangeHander} />
        <br />
        나이:&nbsp; <input value={age} onChange={ageChangeHander} />
        <br />
        <Button addFunction={clickAddButtonHandler}>추가</Button>
      </div>
      {users.map((user) => {
        return (
          <User
            key={user.id}
            user={user}
            removeFunction={clickRemoveButtonHandler}
          />
        );
      })}
    </div>
  );
};

export default App;

// <br /> 사용 금지
