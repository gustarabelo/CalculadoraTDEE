const sexo = document.querySelector("#sexo-select");
const peso = document.querySelector("#peso-value");
const altura = document.querySelector("#alt-value");
const idade = document.querySelector("#idade-value");
const objetivo = document.querySelector("#objetivo-select");
const atiFisica = document.querySelector("#ativ-select");
const calcularButton = document.querySelector("#calcular");
const result = document.querySelector("#result");

const tmbValue = document.querySelector("#tmb")
const tdeeValue = document.querySelector("#tdee")
const imcValue = document.querySelector("#imc")
const pesoIdealValue = document.querySelector("#pesoIdeal")

const hideFalse = false

let tmbCalc;
let tdeeCalc;

const calcularTMB = () => {

    if(sexo.value === "femi"){
        tmbCalc = ((10 * peso.value) + (6.25 * altura.value) - (5 * idade.value)) - 161 

    }else if(sexo.value === "masc"){
        tmbCalc = ((10 * peso.value) + (6.25 * altura.value) - (5 * idade.value)) + 5   

    }
    tmbValue.innerHTML = tmbCalc + " Calorias"
}

const calcularTDEE = () =>{
    tdeeValue.innerHTML = tmbCalc * objetivo.value + " Calorias"
} 

calcularButton.addEventListener("click", (e) => {

    if(peso.value >= 20 && altura.value >= 100 && idade.value >= 10){
        result.classList.toggle("hide")
        calcularTMB()
        calcularTDEE()
    }
})