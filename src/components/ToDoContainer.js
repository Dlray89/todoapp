import React, { useContext } from "react";
import { ToDoContext } from "../context/todo-context";
import { AddToDoFrom } from "./form/addToDo";
import { ToDoList } from "./todolist";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

export const ToDoContainer = ({ darkMode, setDarkMode }) => {
  const { deleteAll, todos,  statusList } =
    useContext(ToDoContext);

  return (
    <>
      {" "}
      <div className="container">
        {" "}
        <div className="container__title-container">
          <h1 className="container__title-container--title"> TODO</h1>
          {darkMode ? (
            <button
              onClick={() => setDarkMode(false)}
              className="container__title-container--btn"
            >
              <img src={sun} alt="moon" />
            </button>
          ) : (
            <button
              onClick={() => setDarkMode(true)}
              className="container__title-container--btn"
            >
              <img src={moon} alt="moon" />
            </button>
          )}
        </div>
        <>
          <AddToDoFrom darkmode={darkMode} setDarkMode={setDarkMode} />
        </>
        <ToDoList darkmode={darkMode} setDarkMode={setDarkMode} />
        <div
          className={
            darkMode
              ? "container__title-container--filter-and-delete-dark"
              : "container__title-container--filter-and-delete"
          }
        >
          <div>You have {todos.length} item!</div>
          <div className="container__title-container--filter-and-delete__btn-container">
            <p className="container__title-container--filter-and-delete__btn-container--btn">
              {statusList}
            </p>
          </div>

          <div style={{ cursor: "pointer" }} onClick={() => deleteAll()}>
            Clear all completed
          </div>
        </div>
      </div>
    </>
  );
};
