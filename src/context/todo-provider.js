import React, { useState } from "react";
import { ToDoContext } from "./todo-context";

const todosData = [
  { id: 1, name: "Create React Project", isComplete: false },
  { id: 2, name: "Do taxes", isComplete: false },
];

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState(todosData);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("All");

  const AddNewTodo = () => {
    let todoObj = {
      name: name,
      isComplete: false,
    };

    setTodos(todos.concat(todoObj));
    setName("");
  };

  const toggleComplete = (id) => {
    let newTodosList = [...todos];

    newTodosList[id].isComplete = true;
    setTodos(newTodosList);
  };

  const toggleNoComplete = (id) => {
    let newTodosList = [...todos];

    newTodosList[id].isComplete = false;
    setTodos(newTodosList);
  };

  const deleteTodo = (id) => {
    let newTodoList = [...todos];

    newTodoList.splice(id, 1);
    setTodos(newTodoList);
  };

  const deleteAll = (id) => {
    let newTodoList = [...todos]

    if (newTodoList[id].isComplete) {
      newTodoList.splice(todos, 1)
      setTodos(newTodoList)
    }
  }

  const filterStatus = {
    All:() =>  true,
    Active: (item) => !item.isComplete,
    Completed: (item) => item.isComplete,
  };

  const newStatList = Object.keys(filterStatus);
  const statusList = newStatList.map((item) => (
    <>
      <button
        className="container__title-container--filter-and-delete__btn-container--btn__filter-btn"
        aria-pressed={item === filter}
        key={item}
        onClick={() => {
          setFilter(item);
        }}
      >
        {item}
      </button>
    </>
  ));

  return (
    <ToDoContext.Provider
      value={{
        filter,
        filterStatus,
        statusList,
        deleteTodo,
        name,
        setName,
        AddNewTodo,
        todos,
        setTodos,
        toggleComplete,
        toggleNoComplete,
        deleteAll
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
