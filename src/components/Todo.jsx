import cross from "../images/icon-cross.svg";

function Todo(props) {
  return (
    <div className="todo-item form-control">
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
        onClick={() => props.handleDelete(props.id)}
        className="delete-btn"
      />
    </div>
  );
}

export default Todo;
