import { useState, useRef } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("receive");

  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      return alert("Please fill all fields");
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      type: type,
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setType("receive");

    titleRef.current.focus();
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        placeholder="Expense Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleRef}
      />

      <input
        placeholder="Amount 💲"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="receive">Receive</option>
        <option value="send">Send</option>
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;