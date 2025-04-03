// Query Selectors
const deacreaseBtn = document.querySelector(".decrease-btn");
const increaseBtn = document.querySelector(".increase-btn");
const resetBtn = document.querySelector(".reset-btn");
let numb = document.querySelector(".numb");

// Increase Function
const increaseNumber = () => {
  let addNumb = +numb.innerHTML;
  addNumb++;
  numb.innerHTML = addNumb;
};

// Decrease Function
const deacreaseNumber = () => {
  let addNumb = +numb.innerHTML;
  addNumb--;
  numb.innerHTML = addNumb;
};

// Reset Function
const resetCounter = () => {
  numb.innerHTML = 0;
};

// Event Listeners
increaseBtn.addEventListener("click", increaseNumber);
deacreaseBtn.addEventListener("click", deacreaseNumber);
resetBtn.addEventListener("click", resetCounter);
