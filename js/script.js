const sexo = document.querySelector("#sexo-select");
const peso = document.querySelector("#peso-value");
const altura = document.querySelector("#alt-value");
const idade = document.querySelector("#idade-value");
const objetivo = document.querySelector("#objetivo-select");
const ativFisica = document.querySelector("#ativ-select");
const calcularButton = document.querySelector("#calcular");
const result = document.querySelector("#result");

const tmbValue = document.querySelector("#tmb")
const tdeeValue = document.querySelector("#tdee")
const calTotalText = document.querySelector("#calTotal")

const hideFalse = false

let tmbCalc;
let tdeeCalc;
let totalCal;
let objetivoCal;

const calcularTMB = () => {

    if(sexo.value === "femi"){
        tmbCalc = ((10 * peso.value) + (6.25 * altura.value) - (5 * idade.value)) - 161 

    }else if(sexo.value === "masc"){
        tmbCalc = ((10 * peso.value) + (6.25 * altura.value) - (5 * idade.value)) + 5   

    }

    tmbValue.innerHTML = parseInt(tmbCalc) + " Calorias"
}

const calcularTDEE = () =>{

    tdeeCalc = tmbCalc * ativFisica.value
    tdeeValue.innerHTML = parseInt(tdeeCalc) + " Calorias"
} 

const calcularCalTotal = () =>{

    calcularCalObjetivo()

    if(objetivo.value === "Emagrecer Rápido" || objetivo.value === "Emagrecer"){
        totalCal = tdeeCalc * objetivoCal
    }else{
        totalCal = tdeeCalc + objetivoCal
    }

    calTotalText.innerHTML = "Você precisa de " + parseInt(totalCal) + " calorias para " + objetivo.value
}

const calcularCalObjetivo = () =>{
    switch(objetivo.value){
        case "Emagrecer Rápido":
        objetivoCal = 0.8
        break
        case "Emagrecer":
        objetivoCal = 0.85
        break
        case "Manter Peso":
        objetivoCal = 0
        break
        case "Ganhos Moderados":
        objetivoCal = 250
        break
        case "Ganhos Agressivos":
        objetivoCal = 500
        break

    }
}

calcularButton.addEventListener("click", (e) => {

    if(peso.value >= 20 && altura.value >= 100 && idade.value >= 10 && peso.value <= 300 && altura.value <= 230 && idade.value <= 89){
        result.classList.remove("hide")
        calcularTMB()
        calcularTDEE()
        calcularCalTotal()
    }
    else if(peso.value == 0 || altura.value == 0 || idade.value == 0){
        alert("Preencha os dados restantes.")
    }
    else{
        alert("Dados inválidos")
    }
})