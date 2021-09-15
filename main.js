const numbersButtons = document.querySelectorAll(".numbers");
const display = document.querySelector(".screen__bottom");
const operationButtons = document.querySelectorAll(".operation-button");
const del = document.querySelector(".del");
const allClear = document.querySelector(".all-clear");
const equals = document.querySelector(".equals");

let displayInput = '';
let operationInput = '';


numbersButtons.forEach(number => {
    number.addEventListener('click', (event) => {
      displayInput += event.target.innerText;
      display.textContent = displayInput;
      console.log(displayInput)
    }); 
});
      

operationButtons.forEach(operation => {
  operation.addEventListener('click', (event) => {
    operationInput = event.target.innerText;
    display.textContent = operationInput;
  });
})

