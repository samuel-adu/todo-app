import cross from "../images/icon-cross.svg";

function Todo(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        id={props.id}
        checked={props.completed}
        onChange={() => props.handleChange(props.id)}
      />
      <label htmlFor={props.id}>{props.task}</label>
      <img
        src={cross}
        alt="cross"
        width="15px"
        height="15px"
        onClick={() => props.handleDelete(props.id)}
      />
    </div>
  );
}

export default Todo;
