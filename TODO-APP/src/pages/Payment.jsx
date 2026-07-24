import { useState, useEffect } from "react";
import {
  NavLink,
  Routes,
  Route
} from "react-router-dom";

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


  // Expenses LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);


  // History LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "history",
      JSON.stringify(history)
    );
  }, [history]);


  // Add Expense
  const addExpenses = (expense) => {

    setExpenses((prev) => [
      ...prev,
      expense
    ]);

  };


  // Delete Expense
  const deleteExpense = (id) => {

    const deletedExpense = expenses.find(
      (expense) => expense.id === id
    );


    if (!deletedExpense) {
      return;
    }


    // Deleted expense ko history me save karo
    setHistory((prev) => [
      ...prev,
      deletedExpense
    ]);


    // Main expense list se delete karo
    setExpenses((prev) =>
      prev.filter(
        (expense) => expense.id !== id
      )
    );

  };


  // Restore Expense
  const restoreExpense = (id) => {

    const restoredExpense = history.find(
      (expense) => expense.id === id
    );


    if (!restoredExpense) {
      return;
    }


    // Expense list me wapas add karo
    setExpenses((prev) => [
      ...prev,
      restoredExpense
    ]);


    // History se remove karo
    setHistory((prev) =>
      prev.filter(
        (expense) => expense.id !== id
      )
    );

  };


  // Total Expense Calculate
  const totalExpense = expenses.reduce(
    (total, expense) => {

      return total + Number(expense.amount);

    },
    0
  );


  return (

    <div className="payment-container">


      {/* Heading */}

      <h1>
        💰 Expense Tracker
      </h1>



      {/* Payment Navigation */}

      <nav className="payment-navbar">


        <NavLink
          to="/payment"
          end
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          💰 Payment
        </NavLink>



        <NavLink
          to="/payment/history"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
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

              <ExpenseForm
                onAddExpense={addExpenses}
              />


              <h3 className="total-expense">

                Total Expense: 💲
                {totalExpense.toFixed(2)}

              </h3>


              <ExpenseList
                expenses={expenses}
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
            />

          }
        />


      </Routes>


    </div>

  );
}

export default Payment;