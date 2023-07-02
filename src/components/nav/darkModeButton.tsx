"use client";
import { useState } from "react";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState<Boolean>(true);
  const [icon, setIcon] = useState<String>("bi bi-moon-stars-fill");
  const body = document.querySelector("body");

  function handleClick() {
    setDarkMode(!darkMode);
    applyMode();
  }

  function applyMode() {
    if (darkMode) {
      setIcon("bi-brightness-high-fill");
      body?.setAttribute("data-bs-theme", "dark");
      console.log("dark");
    } else {
      setIcon("bi-moon-stars-fill");
      body?.setAttribute("data-bs-theme", "");
      console.log("no dark");
    }
  }

  return (
    <button
      className="btn btn-outline-secondary mx-3 "
      type="button"
      onClick={handleClick}
    >
      <i className={icon}></i>
    </button>
  );
}
