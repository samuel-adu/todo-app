import React, { useState } from "react";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import cross from "./images/icon-cross.svg";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [newTodo, setNewTodo] = useState({ id: 1, text: "", completed: false });
  const [todosList, setTodosList] = useState([]);

  function TodoItem(props) {
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <p>{props.text}</p>
        <img src={cross} alt="cross" width="15px" height="15px" />
      </div>
    );
  }

  function handleChange(event) {
    setNewTodo((prevTodo) => ({ ...prevTodo, text: event.target.value }));
  }

  function addNewTodo(event) {
    event.preventDefault();
    setTodosList((prevtodosList) => [newTodo, ...prevtodosList]);
    setNewTodo((prevTodo) => ({ ...prevTodo, text: "" }));
  }

  const todoItem = todosList.map((todo) => <TodoItem text={todo.text} />);

  return (
    <div className="container">
      <header className="header navbar">
        <h1 className="logo">Todo</h1>
        <img
          src={darkMode ? sun : moon}
          alt="mode icon"
          className="mode-icon"
          onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
        />
      </header>

      <main>
        <form onSubmit={addNewTodo}>
          <input
            type="text"
            name="todo"
            value={newTodo.text}
            onChange={handleChange}
            placeholder="Create a new todo..."
            className="todo__input"
          />
        </form>

        <div className="todo-list">
          {todoItem}

          <p>{todosList.length} items left</p>
          <p>clear completed</p>
        </div>
      </main>
    </div>
  );
}

export default App;
