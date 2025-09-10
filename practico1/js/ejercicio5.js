window.addEventListener("load", inicio);
function inicio(){
    document.querySelector("#btnCalcular").addEventListener("click", calcularArea);
}

function calcularArea(){
    let ladoDelCuadrado = parseInt(document.querySelector("#txtLado").value);
    let areaDelCuadrado = ladoDelCuadrado*ladoDelCuadrado;
    document.querySelector("#area").innerHTML = "El Área del Cuadrado es: "+areaDelCuadrado;
}