function ExpenseItem({ item, onDelete }) {
  return (
   <div className="expense-item">

  <div className="left">
    <h2>{item.title}</h2>

    <p className="expense-date">
      📅 {item.date}
    </p>
  </div>

  <div className="middle">
    <h2
      className={
        item.type === "receive"
          ? "receive-amount"
          : "send-amount"
      }
    >
      {item.type === "receive" ? "+" : "-"} ₹{item.amount}
    </h2>

    <span
      className={
        item.type === "receive"
          ? "status receive"
          : "status send"
      }
    >
      {item.type === "receive"
        ? "🟢 Receive"
        : "🔴 Send"}
    </span>
  </div>

  <button
    className="delete-btn"
    onClick={() => onDelete(item.id)}
  >
    🗑️
  </button>

</div>
  );
}

export default ExpenseItem;