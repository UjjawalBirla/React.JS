import { useState, useEffect } from "react";
import ExpenseForm from "../components/payment/ExpenseForm";
import ExpenseList from "../components/payment/ExpenseList";
import History from "../components/payment/History";
import "./Payment.css";



function Payment() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("history");
    return saved ? JSON.parse(saved) : [];
  });

  // Expenses localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // History localStorage
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  // Add Expense
  const addExpenses = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  // Delete Expense
  const deleteExpense = (id) => {
    const deletedExpense = expenses.find((expense) => expense.id === id);

    if (!deletedExpense) return;

    setHistory((prev) => [...prev, deletedExpense]);

    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  // Restore Expense
  const restoreExpense = (id) => {
    const restoredExpense = history.find((expense) => expense.id === id);

    if (!restoredExpense) return;

    setExpenses((prev) => [...prev, restoredExpense]);

    setHistory((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div className="payment-container">
      <h1>💰 Expense Tracker</h1>

      {/* Navigation */}
      <nav className="Navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          🏠 Home
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          🗑️ History
        </NavLink>
      </nav>

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <ExpenseForm onAddExpense={addExpenses} />

              <h3 className="total-expense">Total Expense: 💲750.00</h3>

              <ExpenseList expenses={expenses} onDelete={deleteExpense} />
            </>
          }
        />

        {/* HISTORY PAGE */}
        <Route
          path="/history"
          element={<History history={history} onRestore={restoreExpense} />}
        />
      </Routes>
    </div>
  );
}

export default Payment;
