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

  return <div className="todo__list">{todosList}</div>;
}

export default TodoList;
