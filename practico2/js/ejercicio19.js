window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnCalcular").addEventListener("click", calcular)
}

let multiploCinco = 0;
let mayorVeinte = 0;
let ambos = 0;
let cantidad = 0;

function calcular() {
    cantidad++;
    let numero = parseInt(document.querySelector("#txtNum").value);
    if (numero % 5 == 0 && numero > 20) {
        ambos = ambos + 1;
    }
    if (numero > 20) {
        mayorVeinte = mayorVeinte + 1;
    }
    if (numero % 5 == 0) {
        multiploCinco = multiploCinco + 1;
    }
    if (cantidad == 5) {
        document.querySelector("#resultado").innerHTML = "Multiplos de cinco: " + multiploCinco + " Mayores que veinte: " + mayorVeinte + " ambos: " + ambos;
        document.querySelector("#btnCalcular").value = "Reiniciar";
    }
    if (cantidad == 6) {
        multiploCinco = 0;
        mayorVeinte = 0;
        ambos = 0;
        cantidad = 0;
    }
    if (cantidad == 0) {
        document.querySelector("#resultado").innerHTML = " ";
        document.querySelector("#btnCalcular").value = "Calcular";
    }
}