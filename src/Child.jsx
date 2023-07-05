import React from "react";

function Child({ age, name, children }) {
  console.log(age);
  console.log(name);
  console.log(children);
  return <div>Child</div>;
}

Child.defaultProps = {
  children: "빈 값",
};

export default Child;
