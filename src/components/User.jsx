const User = ({ user, removeFunction }) => {
  return (
    <div className="app-style-square">
      {user.name}, {user.age}
      <button onClick={() => removeFunction(user.id)}>삭제</button>
    </div>
  );
};

export default User;
