"use strict";

const body = document.querySelector("body");
const toggle = document.querySelector(".mode-switcher");
const circle = document.querySelector(".circle");
const modeText = document.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  circle.style.left = circle.style.left === "55%" ? "8%" : "55%";
  modeText.textContent =
    modeText.textContent === "Dark Mode" ? "Light Mode" : "Dark Mode";
});
