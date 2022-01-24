import React, { useContext } from "react";
import { ToDoContext } from "../../context/todo-context";

export const AddToDoFrom = ( { darkmode, setDarkMode }) => {
  const { AddNewTodo, name, setName } = useContext(ToDoContext);
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        AddNewTodo();
      }}
      className="form"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={darkmode ? "form__list-dark" : "form__list"}
        placeholder="Create a new todo...."
      />
    </form>
  );
};
