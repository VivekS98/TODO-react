import React from "react";

const TodoList = ({ val, ind }) => {
  return <li key={ind}>{val}</li>;
};

export default TodoList;
