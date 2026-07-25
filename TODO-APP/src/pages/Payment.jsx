import { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

import ExpenseForm from "../components/payment/ExpenseForm";
import ExpenseList from "../components/payment/ExpenseList";
import History from "../components/payment/History";

import "./Payment.css";

function Payment() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");

    return saved ? JSON.parse(saved) : [];
  });
  const [search, setSearch] = useState("");

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("history");

    return saved ? JSON.parse(saved) : [];
  });

  // Expenses LocalStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // History LocalStorage
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

    if (!deletedExpense) {
      return;
    }

    // Deleted expense ko history me save karo
    setHistory((prev) => [...prev, deletedExpense]);

    // Main expense list se delete karo
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  // Restore Expense
  const restoreExpense = (id) => {
    const restoredExpense = history.find((expense) => expense.id === id);

    if (!restoredExpense) {
      return;
    }

    // Expense list me wapas add karo
    setExpenses((prev) => [...prev, restoredExpense]);

    // History se remove karo
    setHistory((prev) => prev.filter((expense) => expense.id !== id));
  };

  // Total Balance Calculate
  const totalExpense = expenses.reduce((total, expense) => {
    if (expense.type === "receive") {
      return total + Number(expense.amount);
    }

    if (expense.type === "send") {
      return total - Number(expense.amount);
    }

    return total;
  }, 0);

  const totalReceived = expenses.reduce((total, expense) => {
    if (expense.type === "receive") {
      return total + Number(expense.amount);
    }
    return total;
  }, 0);

  const totalSent = expenses.reduce((total, expense) => {
    if (expense.type === "send") {
      return total + Number(expense.amount);
    }
    return total;
  }, 0);
  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="payment-container">
      {/* Heading */}

      <h1>💰 Expense Tracker</h1>

      {/* Payment Navigation */}

      <nav className="payment-navbar">
        <NavLink
          to="/payment"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          💰 Payment
        </NavLink>

        <NavLink
          to="/payment/history"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          🗑️ History
        </NavLink>
      </nav>

      {/* Payment Routes */}

      <Routes>
        {/* Payment Main Page */}

        <Route
          index
          element={
            <>
              <input
                type="text"
                placeholder="🔍 Search Expense..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
              <ExpenseForm onAddExpense={addExpenses} />

              <h3 className="total-expense">
                🏦 Current Balance: ₹{totalExpense.toFixed(2)}
              </h3>

              <h3 className="total-expense">
                💰 Total Received: ₹{totalReceived.toFixed(2)}
              </h3>

              <h3 className="total-expense">
                💸 Total Sent: ₹{totalSent.toFixed(2)}
              </h3>

              <ExpenseList
                expenses={filteredExpenses}
                onDelete={deleteExpense}
              />
            </>
          }
        />

        {/* History Page */}

        <Route
          path="history"
          element={
            <History
              history={history}
              onRestore={restoreExpense}
              type="payment"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Payment;
