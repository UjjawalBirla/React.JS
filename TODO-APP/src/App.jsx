import Todo from "./Todo";
import Navbar from "./Navbar";
import Payment from "./pages/Payment";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* TODO Home Page */}
        <Route
          path="/"
          element={<Todo />}
        />

        {/* Payment Page */}
        <Route
          path="/payment"
          element={<Payment />}
        />

      </Routes>
    </>
  );
}

export default App;