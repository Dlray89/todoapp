import {  useState } from "react";
import "./App.css";
import { ToDoContainer } from "./components/ToDoContainer";
import { DarkModeProvider } from "./context/darkMode/DarkModeProvider";

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false)

  return (
    <DarkModeProvider>
      {" "}
      <div className={toggleDarkMode ? 'App-dark': 'App-light'}>
        <ToDoContainer darkMode={toggleDarkMode} setDarkMode={setToggleDarkMode} />
      </div>
    </DarkModeProvider>
  );
}

export default App;
