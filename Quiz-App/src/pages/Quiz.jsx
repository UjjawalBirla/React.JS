import { useEffect, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import Timer from "./../components/Timer";
import ProgressBar from "./../components/ProgressBar";
import QuestionCard from "./../components/QuestionCard";
import useTimer from "../hooks/useTimer";

export default function Quiz() {
  const { state, dispatch } = useContext(QuizContext);
  const { index, questions } = state;

  const navigate = useNavigate();
  const { time, reset } = useTimer(15);

  // Timer 0 hone par wrong answer
  useEffect(() => {
    if (time === 0 && index < questions.length) {
      dispatch({
        type: "ANWSER",
        payload: {
          selectedAnswer: "Not Answered",
          isCorrect: false
        }
      });

      reset();
    }
  }, [time]);

  // Saare questions complete
  useEffect(() => {
    if (questions.length > 0 && index >= questions.length) {
      dispatch({ type: "FINISH" });
      navigate("/result");
    }
  }, [index, questions.length, dispatch, navigate]);

  // Questions nahi hain
  if (!questions || questions.length === 0) {
    return (
      <h2 className="text-center mt-5">
        Loading Questions...
      </h2>
    );
  }

  // Saare questions complete ho gaye
  if (index >= questions.length) {
    return null;
  }

  // 👇 YE LINE TUMHARE CODE ME MISSING THI
  const current = questions[index];

  const handleSelect = (option) => {
    dispatch({
      type: "ANWSER",
      payload: {
        selectedAnswer: option,
        isCorrect: option === current.answer
      }
    });

    reset();
  };

  return (
    <div className="container mt-4">
      <Timer time={time} />

      <ProgressBar
        current={index}
        total={questions.length}
      />

      <QuestionCard
        question={current.question}
        options={current.options}
        onSelect={handleSelect}
      />
    </div>
  );
}