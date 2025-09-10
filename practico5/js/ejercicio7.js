window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrar").addEventListener("click", mostrar);

}

function mostrar() {
    let texto = document.querySelector("#txtTexto").value;
    cantidadLetras = (texto.length)

    let resultado = palabras(texto)

    document.querySelector("#result").innerHTML = resultado;

}



function palabras(t) {
    contador = 1;

    for (let i = 0; i < cantidadLetras; i++) {

        if (t.charAt(i) == " ") {

            contador = contador + 1;

        }

    }

    return contador

}