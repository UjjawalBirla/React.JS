import Todo from "./Todo";
import Navbar from "./Navbar";
import Payment from "./pages/Payment";
import { Routes, Route } from "react-router-dom";
import History from "./components/payment/History";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Todo />} />

        <Route path="/payment/*" element={<Payment />} />
        <Route
          path="/todo-history"
          element={<History type="todo" history={[]} />}
        />
      </Routes>
    </>
  );
}

export default App;
