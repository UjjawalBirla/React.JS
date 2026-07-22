import todoLogo from "./assets/todo-logo.png";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={todoLogo} alt="Todo App Logo" className="logo-img" />

        <div className="logo-text">
          {"TODO APP".split("").map((letter, index) => (
            <span key={index} className="logo-letter">
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#">Home</a>

        <a href="#tasks" onClick={() => setMenuOpen(false)}>
          Tasks
        </a>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Change theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;
