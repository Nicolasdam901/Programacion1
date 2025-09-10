window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnCalcular").addEventListener("click", calcularImporte);

}

function calcularImporte(){

    let importe = parseInt(document.querySelector("#txtImporte").value);
    let resultado = importe+(importe*22/100);
    document.querySelector("#importeFinal").innerHTML = "El importe final es "+resultado;

}