document.querySelector("#btnEstablecer").addEventListener("click", establecer);
document.querySelector("#btnEnviar").addEventListener("click", adivinar);
document.querySelector("#btnRandom").addEventListener("click", generarRandom);

let numIngreso;
let numAdivinar;
let comparacion;
let intentos = 0;

function generarRandom() {

    numIngreso = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    alert("Numero aleatorio generado con exito");

}

function establecer() {

    numIngreso = parseInt(document.querySelector("#txtNumIngreso").value);
    alert('Numero establecido con exito');

}


function adivinar() {

    numAdivinar = parseInt(document.querySelector("#txtNumAdivinar").value)

    intentos++;

    if (numAdivinar > numIngreso) {
        comparacion = numAdivinar - numIngreso;
    } else {
        comparacion = numIngreso - numAdivinar;
    }

    if (numAdivinar == numIngreso) {
        alert("Ganaste felicidades!");
        document.querySelector("#etqResultado").innerHTML = "Ganaste!<br>Intentos: " + intentos;

    } else if (comparacion > 15) {
        document.querySelector("#etqResultado").innerHTML = "Estas muy lejos";
    } else if (comparacion >= 10 && comparacion <= 15) {
        document.querySelector("#etqResultado").innerHTML = "Te estas acercando";
    } else if (comparacion >= 5 && comparacion <= 9) {
        document.querySelector("#etqResultado").innerHTML = "Cada vez mas cerca";
    } else {
        document.querySelector("#etqResultado").innerHTML = "Muy pero muy cerca";
    }



}