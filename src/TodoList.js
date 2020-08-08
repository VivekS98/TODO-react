import React from "react";
import './App.css';

const TodoList = ({ val, deleteTodo, complete }) => {
  console.log(val);
  return <div className="todo-wrap">
            <li className={val.completed ? 'todo-done' : 'todo'}>
            <h4 onClick={() => complete(val)}>{val.title}</h4>
            <h4 className="delete-todo" onClick={() => deleteTodo(val)}><b>X</b></h4>
            </li> 
        </div>;
};

export default TodoList;
