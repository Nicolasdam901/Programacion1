window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrar").addEventListener("click", mostrar);

}

function mostrar() {
    let texto = document.querySelector("#txtTexto").value;
    let letra = document.querySelector("#txtLetra").value;
    cantidadLetras = (texto.length)

    let resultado = aparece(texto, letra)

    document.querySelector("#result").innerHTML = resultado;

}



function aparece(t, a) {
    let contador = 0;

    for (let i = 0; i < cantidadLetras; i++) {

        if (t.charAt(i) == a) {

            contador = contador + 1;

        }

    }

    return contador

}

