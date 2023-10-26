import displayAdvice from "../modules/displayAdvice.js";

const adviceButton = document.querySelector(".icon-container");

adviceButton.addEventListener("click", displayAdvice);

window.addEventListener("load", () => {
  displayAdvice();
});
