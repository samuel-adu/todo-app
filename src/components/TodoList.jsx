import Todo from "./Todo";

function TodoList(props) {
  function filterTask(filterName) {
    if (filterName === "Active") {
      return (todo) => !todo.completed;
    } else if (filterName === "Complete") {
      return (todo) => todo.completed;
    } else {
      return () => true;
    }
  }

  const todosList = props.todos.filter(filterTask(props.filter)).map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        task={todo.task}
        handleChange={props.toggleTaskCompleted}
        handleDelete={props.deleteTask}
      />
    );
  });

  const activeTask = props.todos.filter((todo) => !todo.completed);
  const itemNoun = activeTask.length > 1 ? "items" : "item";
  const footerText = `${activeTask.length} ${itemNoun} left`;

  return (
    <div className="todo__list">
      {todosList}

      {props.todos.length > 0 && (
        <div className="todo__footer">
          <p>{footerText}</p>

          <button className="btn" onClick={props.deleteAllCompletedTask}>
            Clear Completed
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
