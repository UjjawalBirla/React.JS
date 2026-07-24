import { useEffect, useState } from "react";
import "./Todo.css";

function Todo() {
  const [newTodo, setNewTodo] = useState("");

  // LocalStorage se todos load karna
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [todoHistory, setTodoHistory] = useState(() => {
    const savedHistory = localStorage.getItem("todoHistory");

    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Jab bhi todos change honge, LocalStorage me save honge
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("todoHistory", JSON.stringify(todoHistory));
  }, [todoHistory]);

  // Add Todo
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
        },
      ]);

      setNewTodo("");
    }
  };

  // Complete / Uncomplete Todo
  const handleComplete = (index) => {
    const newTodos = [...todos];

    newTodos[index].completed = !newTodos[index].completed;

    setTodos(newTodos);
  };

  // Delete Todo
  const handleDelete = (index) => {
    const deletedTodo = todos[index];

    setTodoHistory((prev) => [...prev, deletedTodo]);

    const newTodos = todos.filter((todo, i) => i !== index);

    setTodos(newTodos);
  };
  const restoreTodo = (id) => {
    const restoredTodo = todoHistory.find((todo) => todo.id === id);

    if (!restoredTodo) return;

    setTodos((prev) => [...prev, restoredTodo]);

    setTodoHistory((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="box1" id="tasks">
      <h1>TODO APP</h1>

      <div className="box2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />

          <button className="addbtn" type="submit">
            Add Todo
          </button>
        </form>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              onClick={() => handleComplete(index)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",

                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>

            <button className="deletebtn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
