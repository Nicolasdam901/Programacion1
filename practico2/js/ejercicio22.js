window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnCalcular").addEventListener("click", calcular)
}


function calcular() {

    let total = parseInt(document.querySelector("#txtCompra").value);

    let tarjeta = document.querySelector("#txtTarjeta").value;

    if (total < 10000 && tarjeta == "si") {

        let pago = total - (total * (4 / 100));

        document.querySelector("#totalFinal").innerHTML = "$" + pago;

    }
    else {

        let pago = total;

        document.querySelector("#totalFinal").innerHTML = "$" + pago;

    }
}
