import React, { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Form from "./components/Form";
import FilterButtons from "./components/FilterButtons";
import todosData from "./todosData";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState(todosData);
  console.log(todoList);

  function addNewTodo(text) {
    const todo = { id: nanoid(), task: text, completed: false };
    setTodoList((prevTodoList) => [todo, ...prevTodoList]);
  }

  function toggleTaskCompleted(id) {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }

  function deleteTask(id) {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todoItem) => {
        return todoItem.id !== id;
      })
    );
  }

  function deleteCompleted() {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todoItem) => {
        return !todoItem.completed;
      })
    );
  }

  const todoElement = todoList.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        text={todo.task}
        handleChange={toggleTaskCompleted}
        handleDelete={deleteTask}
      />
    );
  });

  return (
    <div className="container">
      <Header />

      <Form addNewTodo={addNewTodo} />

      <div className="todo__list">
        {todoElement}

        {todoList.length > 0 && (
          <div className="todo__footer">
            <p>
              {todoList.length} item{todoList.length > 1 ? "s" : ""} left
            </p>
            <button className="btn" onClick={deleteCompleted}>
              Clear Completed
            </button>
          </div>
        )}
      </div>

      {todoList.length > 0 && <FilterButtons />}
    </div>
  );
}

export default App;
