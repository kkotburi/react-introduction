import React from "react";

function Grandchildren() {
  return <div>Hello!</div>;
}

function Child() {
  return <Grandchildren />;
}

function App() {
  return <Child />;
}

export default App;
