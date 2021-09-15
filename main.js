const numbersButtons = document.querySelectorAll(".numbers");
const display = document.querySelector(".screen__bottom");
const operationButtons = document.querySelectorAll(".operation-button");
const del = document.querySelector(".del");
const allClear = document.querySelector(".all-clear");
const equals = document.querySelector(".equals");

let displayInput = '';

numbersButtons.forEach(number => {
  number.addEventListener('click', (event) => {
    displayInput += event.target.innerText;
    display.textContent = displayInput;
  }); 
})


operationButtons.forEach(operation => {
  operation.addEventListener('click', (e) => {
    displayInput += e.target.innerText;
    display.textContent = displayInput;
  })
})

equals.addEventListener('click', (e) => {
  let expression = display.textContent;
  display.textContent = eval(expression);
});

del.addEventListener('click', (e) => {
  
});

allClear.addEventListener('click', (e) => {
  display.textContent = '';
});