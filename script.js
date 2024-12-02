const valueInput = document.querySelector(".value-input");
const animateCheckbox = document.querySelector(
  "#animate input[type='checkbox']",
);
const hideCheckbox = document.querySelector("#hide input[type='checkbox']");
const spinnerProgress = document.getElementById("spinner-progress");
const circle = document.getElementById("circle");

const setProgress = (value) => {
  value = Math.max(0, Math.min(value, 100));
  const offset = circumference * (1 - value / 100);
  circle.style.strokeDashoffset = offset;
};

animateCheckbox.addEventListener("change", () => {
  spinnerProgress.classList.toggle("animated");
});

hideCheckbox.addEventListener("change", () => {
  spinnerProgress.classList.toggle("hidden");
});
valueInput.addEventListener("input", () => {
  const value = valueInput.value;
  spinnerProgress.setAttribute("data-value", value);
  setProgress(value);
});

const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = `${circumference} ${circumference}`;

const initialValue = parseInt(spinnerProgress.getAttribute("data-value"), 0);
setProgress(initialValue);
