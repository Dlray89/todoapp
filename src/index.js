import React from "react";
import ReactDOM from "react-dom";
import "./style/css/main.css";
import App from "./App";
import { ToDoProvider } from "./context/todo-provider";

ReactDOM.render(
  <React.StrictMode>
    <ToDoProvider>
      {" "}
      <App />
    </ToDoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
