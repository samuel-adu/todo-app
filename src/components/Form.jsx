import { useState } from "react";

function Form(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addNewTodo(inputText);
    setInputText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Create a new todo..."
        className="todo__input"
        value={inputText}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
