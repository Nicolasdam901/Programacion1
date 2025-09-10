document.querySelector("#btnEnviar").addEventListener("click", proceso);

let regalos;
let nochestotales;

function proceso() {

    let noches = parseInt(document.querySelector("#txtNoches").value);
    let pago = document.querySelector("#slctPago").value;

    if (noches >= 7 && pago == "t") {
        regalos = 3;
    } else if (noches >= 7) {
        regalos = 2;
    } else if (noches >= 3) {
        regalos = 1;
    } else {
        regalos = 0;
    }

    nochestotales = noches + regalos;

    if (pago == "x") {
        alert("Error, selecciona un metodo de pago")
    } else if (regalos > 0) {
        document.querySelector("#etqResultado").innerHTML =
            "Resultado:<br>"
            + "Noches de regalo: " + regalos
            + "<br>Noches de alojamiento total: " + nochestotales
            + "<br>Monto final: " + noches * 40;
    } else {
        document.querySelector("#etqResultado").innerHTML =
            "Resultado:<br>"
            + "Noches: " + nochestotales
            + "<br>Monto final: " + noches * 40;
    }






}