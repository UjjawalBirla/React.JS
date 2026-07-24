import Todo from "./Todo";
import Navbar from "./Navbar";
import Payment from "./pages/Payment";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Todo />}
        />

        <Route
          path="/payment/*"
          element={<Payment />}
        />

      </Routes>
    </>
  );
}

export default App;