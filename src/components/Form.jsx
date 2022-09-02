import { useState } from "react";

function Form(props) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addNewTodo(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Create a new todo..."
        className="todo__input"
        value={task}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
