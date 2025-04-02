const deacreaseBtn = document.querySelector(".decreaseBtn");
const increaseBtn = document.querySelector(".increaseBtn");
let numb = document.querySelector(".numb");

const increaseNumber = () => {
  let addNumb = +numb.innerHTML;
  addNumb++;
  numb.innerHTML = addNumb;
};

const deacreaseNumber = () => {
  let addNumb = +numb.innerHTML;
  addNumb--;
  numb.innerHTML = addNumb;
};

increaseBtn.addEventListener("click", increaseNumber);
deacreaseBtn.addEventListener("click", deacreaseNumber);
