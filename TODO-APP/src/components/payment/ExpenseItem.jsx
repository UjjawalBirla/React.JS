function ExpenseItem({ item, onDelete }) {
  return (
    <div className="expense-item">

      <span>{item.title}</span>

      <span>₹{item.amount}</span>

      <span>{item.type}</span>

      <button onClick={() => onDelete(item.id)}>
        ❌
      </button>

    </div>
  );
}

export default ExpenseItem;