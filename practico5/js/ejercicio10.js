window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrar").addEventListener("click", mostrar);

}

function mostrar() {
    let texto = document.querySelector("#txtTexto").value;
    let letra = document.querySelector("#txtLetra").value;

    cantidadLetras = (texto.length)

    let resultado = remplazar(texto, letra)

    document.querySelector("#result").innerHTML = resultado;

}



function remplazar(t, l) {
    let remplazarL = "";

    for (let i = 0; i < cantidadLetras; i++) {

        if (t.charAt(i) == l) {

            remplazarL = remplazarL + "*";

        }

        else {

            remplazarL = remplazarL + t.charAt(i);
        }

    }

    return remplazarL

}