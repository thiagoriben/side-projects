const DiminuirBtn = document.getElementById("DiminuirBtn")
const ResetarBtn = document.getElementById("ResetarBtn")
const AumentarBtn = document.getElementById("AumentarBtn")
const LabelContador = document.getElementById("LabelContador")
let contador = 0

DiminuirBtn.onclick = function(){
    contador--
    LabelContador.textContent = contador
}
ResetarBtn.onclick = function(){
    contador = 0
    LabelContador.textContent = contador
}
AumentarBtn.onclick = function(){
    contador++
    LabelContador.textContent = contador
}