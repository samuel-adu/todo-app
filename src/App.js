import React, { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Form from "./components/Form";
import FilterButtons from "./components/FilterButtons";
import todosData from "./todosData";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(todosData);

  function addNewTodo(text) {
    const todo = { id: nanoid(), task: text, completed: false };
    setTodos((prevTodos) => [todo, ...prevTodos]);
  }

  function toggleTaskCompleted(id) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }

  function deleteTask(id) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => {
        return todo.id !== id;
      })
    );
  }

  function deleteAllCompletedTask() {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => {
        return !todo.completed;
      })
    );
  }

  return (
    <div className="container">
      <Header />

      <Form addNewTodo={addNewTodo} />

      <TodoList
        todos={todos}
        deleteAllCompletedTask={deleteAllCompletedTask}
        deleteTask={deleteTask}
        toggleTaskCompleted={toggleTaskCompleted}
      />

      {todos.length > 0 && <FilterButtons />}
    </div>
  );
}

export default App;
