import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export default function Result() {
  const { state, dispatch } = useContext(QuizContext);

  const percentage = Math.round(
    (state.score / state.questions.length) * 100
  );

 useEffect(() => {

  // Blank / incomplete quiz ko leaderboard me save mat karo
  if (!state.username.trim() || !state.completed) {
    return;
  }

  const entry = {
    name: state.username,
    score: state.score,
    percentage,
    date: new Date().toLocaleString()
  };

  const stored =
    JSON.parse(localStorage.getItem("leaderboard")) || [];

  const updated = [...stored, entry];

  updated.sort((a, b) => b.score - a.score);

  localStorage.setItem(
    "leaderboard",
    JSON.stringify(updated)
  );

}, []);
  return (
    <div className="container mt-5">

      {/* Result Card */}
      <div className="card shadow p-5 text-center">

        <h2 className="fw-bold mb-3">
          🎉 Quiz Completed!
        </h2>

        <h4>
          {state.username}, your score is:
        </h4>

        <h1 className="text-success">
          {state.score} / {state.questions.length}
        </h1>

        <h5>
          Percentage: {percentage}%
        </h5>

        <div className="d-flex justify-content-center gap-3 mt-4">

          <Link
            to="/leaderboard"
            className="btn btn-primary"
          >
            View Leaderboard
          </Link>

          <Link
            to="/"
            onClick={() => dispatch({ type: "RESET" })}
            className="btn btn-warning"
          >
            Home
          </Link>

        </div>
      </div>


      {/* Question Wise Result */}
      <div className="mt-5">

        <h2 className="text-center mb-4">
          Answer Summary
        </h2>

        {state.answers?.map((item, index) => (

          <div
            key={index}
            className="card shadow-sm p-3 mb-3"
          >

            {/* Question */}
            <h5>
              {index + 1}. {item.question}
            </h5>

            {/* User Answer */}
            <p className="mb-1">
              Your Answer:{" "}
              <strong>
                {item.selectedAnswer}
              </strong>
            </p>

            {/* Correct Answer */}
            <p className="mb-2">
              Correct Answer:{" "}
              <strong className="text-success">
                {item.correctAnswer}
              </strong>
            </p>

            {/* Correct / Wrong */}
            {item.isCorrect ? (

              <span className="text-success fw-bold">
                ✓ Correct
              </span>

            ) : (

              <span className="text-danger fw-bold">
                ✗ Wrong
              </span>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}