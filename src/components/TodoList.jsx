import Todo from "./Todo";

function TodoList({
  todos,
  toggleTaskCompleted,
  deleteTask,
  deleteAllCompletedTask,
}) {
  const numOfActiveTask = todos.filter((task) => !task.completed).length;
  const item = numOfActiveTask > 1 ? "items" : "item";

  const todosList = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        task={todo.task}
        handleChange={toggleTaskCompleted}
        handleDelete={deleteTask}
      />
    );
  });
  return (
    <div className="todo__list">
      {todosList}

      {todos.length > 0 && (
        <div className="todo__footer">
          <p>
            {numOfActiveTask} {item} left
          </p>
          <button className="btn" onClick={deleteAllCompletedTask}>
            Clear Completed
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
