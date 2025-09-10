window.addEventListener("load", inicio);
function inicio(){
    document.querySelector("#btnCalculoImporte").addEventListener("click", calcularImporte);
}

function calcularImporte(){
    let importe = parseInt(document.querySelector("#txtImporte").value);
    let porcentajeRecarga = parseInt(document.querySelector("#txtPorcentajeRecarga").value);
    let resultado = (porcentajeRecarga*importe/100)+importe;
    document.querySelector("#resultadoImporte").innerHTML = "El importe final es: "+resultado;
}