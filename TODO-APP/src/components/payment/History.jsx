import { useState } from "react";
import "./History.css";

function History({ history, onRestore, type }) {
  const [todoHistory, setTodoHistory] = useState(() => {
    const saved = localStorage.getItem("todoHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const currentHistory = type === "todo" ? todoHistory : history;

  if (currentHistory.length === 0) {
    return (
      <p className="common-history-empty">
        {type === "todo" ? "No Deleted Todos" : "No Deleted Expenses"}
      </p>
    );
  }

  const restoreTodo = (id) => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    const todo = todoHistory.find((item) => item.id === id);

    if (!todo) return;

    const updatedTodos = [...savedTodos, todo];

    const updatedHistory = todoHistory.filter((item) => item.id !== id);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    localStorage.setItem("todoHistory", JSON.stringify(updatedHistory));

    setTodoHistory(updatedHistory);
  };

  return (
    <div className="common-history">
      <h2 >🗑️ {type === "todo" ? "Todo History" : "Payment History"}</h2>

      {currentHistory.map((item) => (
        <div className="common-history-item" key={item.id}>
          {type === "todo" ? (
            <span>{item.text}</span>
          ) : (
            <>
              <span>{item.title}</span>
              <span>💲{item.amount}</span>
              <span>{item.type}</span>
            </>
          )}

          <button
            onClick={() =>
              type === "todo" ? restoreTodo(item.id) : onRestore(item.id)
            }
          >
            ♻️ Restore
          </button>
        </div>
      ))}
    </div>
  );
}

export default History;
