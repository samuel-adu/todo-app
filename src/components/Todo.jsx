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
        width="10px"
        height="10px"
        onClick={() => props.handleDelete(props.id)}
      />
    </div>
  );
}

export default Todo;
