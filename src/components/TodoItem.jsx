import crossIcon from "../images/icon-cross.svg";
// import checkIcon from "../images/icon-check.svg";

export default function TodoItem(props) {
  return (
    <div className="todo-item">
      {/* <img src={checkIcon} alt="" /> */}
      <input type="checkbox" name="" id="" className="checkbox" />
      <p>{props.todoText}</p>
      <img src={crossIcon} alt="" onClick={props.handleDelete} />
    </div>
  );
}
