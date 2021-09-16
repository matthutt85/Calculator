const numbersButtons = document.querySelectorAll(".numbers");
const display = document.querySelector(".display__bottom");
const display2 = document.querySelector(".display__top")
const tempDisplay = document.querySelector(".display__temp-result")
const operationButtons = document.querySelectorAll(".operation-button");
const del = document.querySelector(".del");
const allClear = document.querySelector(".all-clear");
const equals = document.querySelector(".equals");

let displayInput1 = '';
let displayInput2 = '';
let tempDisplay1 = '';
let result = null;
let lastOperation = '';


numbersButtons.forEach(number => {
  number.addEventListener('click', (event) => {
    displayInput1 += event.target.innerText;
    display.textContent = displayInput1;
  }); 
})


operationButtons.forEach(operation => {
  operation.addEventListener('click', (e) => {
    if (!displayInput1) return;
    const operationName = e.target.innerText;
    if (displayInput1 && displayInput2 && lastOperation) {
      sum();
    } else {
      result = parseFloat(displayInput1);
    }
    clearOp(operationName);
    console.log(result);
    // displayInput += e.target.innerText;
    // display.textContent = displayInput;
  });
});

function clearOp (name = '') {
  displayInput2 += displayInput1 + ' ' + name + ' ';
  display2.innerText = displayInput2;
  display.innerText = '';
  displayInput1 = '';
}


equals.addEventListener('click', (e) => {
  // let sum = display.textContent;
  // display.textContent = eval(sum);
});

del.addEventListener('click', (e) => {
  
});

allClear.addEventListener('click', (e) => {
  display.textContent = '';
  display2.textContent = '';
  displayInput1 = '';
  displayInput2 = '';
});