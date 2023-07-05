import React, { useState } from "react";
import "./App.css";

const App = () => {
  const users = [
    { id: 1, age: 37, name: "송중기" },
    { id: 2, age: 29, name: "송강" },
    { id: 3, age: 23, name: "김유정" },
    { id: 4, age: 40, name: "구교환" },
  ];

  return (
    <div className="app-style">
      {users.map((item) => {
        return (
          <div key={item.id} className="app-style-square">
            {item.name}, {item.age}
          </div>
        );
      })}
      {/* <div className="app-style-square">
        {users[0].name}, {users[0].age}
      </div>
      <div className="app-style-square">
        {users[1].name}, {users[1].age}
      </div>
      <div className="app-style-square">
        {users[2].name}, {users[2].age}
      </div>
      <div className="app-style-square">
        {users[3].name}, {users[3].age}
      </div> */}
    </div>
  );
};
export default App;
