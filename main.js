const numbersButtons = document.querySelectorAll(".numbers");
const display = document.querySelector(".screen__bottom");
const operationButtons = document.querySelectorAll(".operation-button");
const del = document.querySelector(".del");
const allClear = document.querySelector(".all-clear");
const equals = document.querySelector(".equals");

let displayInput = '';
let result = null;
let sum = '';
let operationInput = '';
let numberStore1 = '';
let numberStore2 = '';

numbersButtons.forEach(number => {
    number.addEventListener('click', (event) => {
      displayInput += event.target.innerText;
      display.textContent = displayInput;
    }); 
})
      

operationButtons.forEach(operation => {
  operation.addEventListener('click', (e) => {
    operationInput = e.target.innerText;
    display.textContent = operationInput;
    if (displayInput.)
  })
})

equals.addEventListener('click', (e) => {

});

del.addEventListener('click', (e) => {
  
});

allClear.addEventListener('click', (e) => {

});