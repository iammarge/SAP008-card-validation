import isValid from './validator.js';

let bottom = document.getElementById("bottom");
bottom.addEventListener("click", validator)
function validator() {
    let cardNumber = document.getElementById("cardNumber").value;
    console.log(isValid(cardNumber));
}