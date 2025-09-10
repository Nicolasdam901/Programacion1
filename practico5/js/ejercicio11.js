window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrar").addEventListener("click", mostrar);

}

function mostrar() {
    let texto = document.querySelector("#txtTexto").value;

    cantidadLetras = (texto.length)

    let resultado = primeraLetra(texto)

    document.querySelector("#result").innerHTML = resultado;

}



function primeraLetra(t) {
    let palabra = "";

    palabra = palabra + t.charAt(0).toUpperCase();

    palabra = palabra + t.substring(1).toLowerCase();

    return palabra

}