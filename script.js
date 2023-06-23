const km = document.querySelector("#km")
const comb = document.querySelector("#comb")
const result = document.querySelector("#result")

let button = document.querySelector("#button")
button.addEventListener("click" , calc)

 

function calc(){ 
 let  inputKM = km.value
   let inputComb = comb.value
    let media = (inputKM / inputComb)

    result.innerHTML=`Consumo medio de ${media.toFixed(1)} lts. por Km`

    limparInputs()
   
}


function limparInputs() {
 km.value= ``
 comb.value= ``
    } 