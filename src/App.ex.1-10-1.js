import React from "react";

function App() {
  return <User>Hello!</User>;
}

function User(props) {
  console.log("props", props);
  return <div>{props.children}</div>;
}

export default App;
