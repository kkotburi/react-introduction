import React, { useState } from "react";

function App() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  // 화살표 함수 활용
  const onChangeIdHandler = (event) => {
    setUserId(event.target.value);
  };

  const onChangePwHandler = (event) => {
    setUserPw(event.target.value);
  };

  return (
    <div>
      <div>
        ID: <input type="text" value={userId} onChange={onChangeIdHandler} />
      </div>
      <div>
        PW: {/* TIL 20230613 */}
        <input type="password" value={userPw} onChange={onChangePwHandler} />
      </div>
      <button
        onClick={function () {
          alert(
            `고객님이 입력하신 ID는 '${userId}'이며, PW '${userPw}'입니다.`
          );
          setUserId("");
          setUserPw("");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default App;
