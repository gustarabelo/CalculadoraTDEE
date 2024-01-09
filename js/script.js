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

const protValue = document.querySelector("#prot")
const carbValue = document.querySelector("#carb")
const gordValue = document.querySelector("#gord")

let tmbCalc;
let tdeeCalc;
let totalCal;
let objetivoCal;

let protCalc
let gordCalc
let carbCalc

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

    calcularMacros()
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

const calcularMacros = () =>{

    let protMulti
    let gordMulti

    let protCalorias
    let gordCalorias
    let carbCalorias
    
    if(objetivo.value === "Emagrecer Rápido" || objetivo.value === "Emagrecer"){
        protMulti = 2.2
        gordMulti = 0.9
    }else{
        protMulti = 1.8
        gordMulti = 0.8
    }

    protCalc = peso.value * protMulti
    protCalorias = protCalc * 4

    gordCalc = peso.value * gordMulti
    gordCalorias = gordCalc * 9

    carbCalorias = totalCal - protCalorias - gordCalorias
    carbCalc = carbCalorias / 4

    protValue.innerHTML = protCalc.toFixed(1) + "g = " + protCalorias.toFixed(1) + "kcal"
    gordValue.innerHTML = gordCalc.toFixed(1) + "g = " + gordCalorias.toFixed(1) + "kcal"
    carbValue.innerHTML = carbCalc.toFixed(1) + "g = " + carbCalorias.toFixed(1) + "kcal"
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