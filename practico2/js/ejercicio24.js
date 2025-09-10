window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnCalcular").addEventListener("click", calcular)
}

let cantidad = 0;

let sueldo = 0;

let sueldoTotal = 0;

let min = 0;

function calcular() {

    cantidad++;

    let sueldo = parseInt(document.querySelector("#txtSueldos").value);

    sueldoTotal = sueldo + sueldoTotal;

    if (min == 0) {

        min = sueldo;
    
    }

    if (sueldo < min) {

        min = sueldo;

    }

    document.querySelector("#resultado").innerHTML = "total de los sueldos a pagar: " + sueldoTotal + "/ " + "empleados cobrarán: " + cantidad + "/ " + "sueldo más bajo: " + min;

}