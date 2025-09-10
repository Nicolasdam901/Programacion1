window.addEventListener("load", inicio);


function inicio() {
    document.querySelector("#btnCalcular").addEventListener("click", calular);

}
function calular() {
let chirridos = parseInt(document.querySelector("#txtC").value);
let resultadoFahr = (50+(chirridos-40)/4).toFixed(1);
let resultadoCel = ((resultadoFahr-32)/1.8).toFixed(1);
document.querySelector("#Fahrenheit").innerHTML="Fahrenheit: "+resultadoFahr+"°F";
document.querySelector("#Celsius").innerHTML="Celsius: "+resultadoCel+"°C";

}