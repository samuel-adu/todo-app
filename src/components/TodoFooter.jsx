export default function TodoFooter(props) {
  return (
    <div className="todo-footer">
      <p>
        {props.todoList.length} {props.todoList.length > 1 ? "items " : "item "}
        left
      </p>
      <p>Clear Completed</p>
    </div>
  );
}
