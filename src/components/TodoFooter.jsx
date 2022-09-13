import FilterButton from "./FilterButton";

function TodoFooter(props) {
  const activeTask = props.todos.filter((todo) => !todo.completed);
  const itemNoun = activeTask.length > 1 ? "items" : "item";
  const footerText = `${activeTask.length} ${itemNoun} left`;

  return (
    <div className="todo__footer">
      <div className="todo__stats">
        <p>{footerText}</p>

        <button className="btn" onClick={props.deleteAllCompletedTask}>
          Clear Completed
        </button>
      </div>

      <div className="filter-buttons">
        <FilterButton setFilter={props.setFilter} isPressed={props.isPressed} />
      </div>
    </div>
  );
}

export default TodoFooter;
