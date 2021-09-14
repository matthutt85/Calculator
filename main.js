const numbersButtons = document.querySelectorAll(".numbers");
const display = document.querySelector(".screen__bottom")


numbersButtons.forEach(number => {
    number.addEventListener('click', (event) => {
      console.log(event.target.innerHTML)
    }); 
})



