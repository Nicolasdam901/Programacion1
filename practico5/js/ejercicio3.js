window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrar").addEventListener("click", mostrar);

}

function mostrar() {
    let texto = document.querySelector("#txtTexto").value;
    cantidadLetras = (texto.length)

    let resultado = aparece(texto)

    document.querySelector("#result").innerHTML = resultado;

}



function aparece(t) {
    let contador = 0;

    for (let i = 0; i < cantidadLetras; i++) {

        if (t.charAt(i) == "a" || t.charAt(i) == "e" || t.charAt(i) == "i" || t.charAt(i) == "o" || t.charAt(i) == "u") {

            contador = contador + 1;

        }

    }

    return contador

}

