import React, { useState } from "react";

function App() {
  const [name, setName] = useState("김제니");

  return (
    <div>
      {name}
      <br />
      <button
        onClick={function () {
          setName("박채영");
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
