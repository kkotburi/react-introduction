const Button = ({ addFunction, children }) => {
  return <button onClick={addFunction}>{children}</button>;
};

export default Button;
