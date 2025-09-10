window.addEventListener("load" , inicio);
function inicio(){
    document.querySelector("#btnCalculoDeCambio").addEventListener("click", calcularCambio);
}

function calcularCambio(){
    let pesosUruguayos = parseInt(document.querySelector("#txtPesosUruguayos").value);
    let valorDolar = parseInt(document.querySelector("#txtValorDolar").value);
    let conversion = pesosUruguayos/valorDolar;
    let conversionRed = conversion.toFixed(1);
    document.querySelector("#conversion").innerHTML = "Conversión = "+conversionRed;

}