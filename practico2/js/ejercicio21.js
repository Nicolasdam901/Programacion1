window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnCalcular").addEventListener("click", calcular)
}


function calcular() {

    let ingresos = parseInt(document.querySelector("#txtIngresos").value);

    let casa = parseInt(document.querySelector("#txtCasa").value);



    if (ingresos < 20000) {

        let primerPago = casa * (15 / 100);

        let segundoPago = ((casa - primerPago) / 84).toFixed(1);


        document.querySelector("#primero").innerHTML = "primer pago " + "$" + primerPago;

        document.querySelector("#segundo").innerHTML = "pago parcial " + "$" + segundoPago;
    }



    if (ingresos >= 20000) {

        let primerPago = casa * (30 / 100);

        let segundoPago = ((casa - primerPago) / 12).toFixed(1);


        document.querySelector("#primero").innerHTML = "primer pago " + "$" + primerPago;

        document.querySelector("#segundo").innerHTML = "pago parcial " + "$" + segundoPago;
    }
}
