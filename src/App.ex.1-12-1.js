import React, { useState } from "react";

function App() {
  // State를 쓰는 목적: UI 수정

  // Hook
  // const [state, setState] = useState("Initial Value");
  const [count, setCount] = useState(0);
  const [todoList, setTodoLists] = useState([]);

  // useState, useEffect, useContext, useMemo, useDispatch, useSele~

  return <div>State에 대한 이야기입니다.</div>;
}

export default App;
