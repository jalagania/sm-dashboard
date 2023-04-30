import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const DARKMODE =
    JSON.parse(localStorage.getItem("DARKMODE")) !== null
      ? JSON.parse(localStorage.getItem("DARKMODE"))
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(DARKMODE);

  document.body.className = darkMode ? "dark-mode" : "";

  function handleThemeSwitch() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    localStorage.setItem("DARKMODE", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <header className="header">
      <section className="section-container header-section">
        <div className="heading-box">
          <h1 className="heading-box__title">Social Media Dashboard</h1>
          <p className="heading-box__subtitle">Total Followers: 23,004</p>
        </div>
        <div className="theme-box" onClick={handleThemeSwitch}>
          <p className="theme-box__text">Dark Mode</p>
          <button data-testid="btn-switcher" className="theme-box__btn-switcher">
            <div className={`switcher-circle ${darkMode ? "slide-left" : ""}`}></div>
          </button>
        </div>
      </section>
    </header>
  );
}

export default Header;
