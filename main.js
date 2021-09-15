const numbersButtons = document.querySelectorAll(".numbers");
const display = document.querySelector(".screen__bottom");
const operationButtons = document.querySelectorAll(".operation-button");
const del = document.querySelector(".del");
const allClear = document.querySelector(".all-clear");
const equals = document.querySelector(".equals");

let numberInput;
let operationInput;

numbersButtons.forEach(number => {
    number.addEventListener('click', (event) => {
      numberInput = event.target.innerText;
      display.textContent = numberInput
      console.log(numberInput)
    }); 
})
      

operationButtons.forEach(operation => {
  operation.addEventListener('click', (event) => {
    operationInput = event.target.innerText;
    display.textContent = operationInput;
  });
})

