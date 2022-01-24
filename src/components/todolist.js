import React, { useContext, useState } from "react";
import { ToDoContext } from "../context/todo-context";
import check from "../images/icon-check.svg";

export const ToDoList = ({ darkmode  }) => {
  const [deleteIcon, setDeleteIcon] = useState(false);

  const {
    filter,
    filterStatus,
    todos,
    deleteTodo,
    toggleComplete,
    toggleNoComplete,
  } = useContext(ToDoContext);

  return (
    <div className="todo-list-box">
      {console.log(todos, filter, filterStatus)}
      {todos.filter(filterStatus[filter]).map((todo, id) => (
        <div
          onMouseEnter={() => setDeleteIcon(true)}
          key={todo.id}
          className={darkmode? "todo-list-box__items-dark": "todo-list-box__items"}
        >
          {console.log(todo.isComplete, "todo")}
          <div
            onMouseEnter={() => setDeleteIcon(true)}
            onMouseLeave={() => setDeleteIcon(false)}
          >
            {todo.isComplete ? (
              <img
                onClick={() => toggleNoComplete(id)}
                className="todo-list-box__items--check-btn"
                src={check}
                alt="check icon"
              />
            ) : (
              <input
                onClick={() => toggleComplete(id)}
                className="todo-list-box__items--radio-btn"
                type="radio"
              />
            )}
            {todo.name}
          </div>

          <div className="todo-list-box__items--btn-box">
            {deleteIcon ? (
              <button
                onClick={() => deleteTodo(id)}
                className="todo-list-box__items--btn-box__btn"
              >
                {" "}
                X{" "}
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};
