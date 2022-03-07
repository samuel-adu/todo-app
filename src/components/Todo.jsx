import React, { useState } from "react";
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [inputFieldValue, setInputFieldValue] = useState("");
  const [todoData, setTodoData] = useState([]);

  function handleChange(event) {
    setInputFieldValue(event.target.value);
  }

  // handle enter key press
  function handleKeyUp(event) {
    if (!inputFieldValue.length && event.charCode === 13) {
      event.preventDefault();
      return;
    }

    if (inputFieldValue.length > 0 && event.charCode === 13) {
      event.preventDefault();
      setTodoData((prevTodoData) => {
        return [
          {
            text: inputFieldValue,
            id: Math.ceil(Math.random() * 50),
            isCompleted: "false",
          },
          ...prevTodoData,
        ];
      });
      // return the input field back to being blank
      setInputFieldValue("");
      return;
    }
  }

  function handleDelete(id) {
    setTodoData((prevData) => {
      return prevData.filter((data) => {
        return data.id !== id;
      });
    });
  }

  const todoItems = todoData.map((item) => (
    <TodoItem
      key={item.id}
      todoText={item.text}
      // handleDelete={handleDelete}
      handleDelete={() => handleDelete(item.id)}
    />
  ));

  return (
    <main>
      <form className="todo-form">
        <input type="checkbox" name="" id="" className="checkbox" />
        <input
          type="text"
          placeholder="Create a new todo..."
          name="text"
          value={inputFieldValue}
          // onChange={handleChange}
          onChange={(event) => handleChange(event)}
          onKeyPress={handleKeyUp}
        />
      </form>

      {todoItems}

      <TodoFooter todoList={todoData} />
    </main>
  );
}
