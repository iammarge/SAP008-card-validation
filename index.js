import validator from './validator.js';

let bottom = document.getElementById("bottom");
bottom.addEventListener("click", validation)
function validation() {

    let cardNumber = document.getElementById("cardNumber").value;
    console.log(validator.isValid(cardNumber));
    let number = document.querySelector("cardNumber");

    if (cardNumber === "") {
        alert("Campo vazio")
    }

    else if (isNaN(cardNumber)) {
        alert("Digite somente números")
    }

    else if (!validator.isValid(cardNumber)) {
        alert("Número inválido. Não foi possível validar o seu cartão.")
    }

    else {
        alert("Cartão " + validator.maskify(cardNumber) + " validado com sucesso!")
    }
}
