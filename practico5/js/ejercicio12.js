window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrar").addEventListener("click", mostrar);

}

function mostrar() {
    let texto = document.querySelector("#txtTexto").value;

    cantidadLetras = (texto.length)

    let textoSinEspacios = eliminarEspacios(texto)

    cantidadLetrasSin = (textoSinEspacios.length)

    let resultado = contar(textoSinEspacios)

    document.querySelector("#result").innerHTML = resultado;

}


function eliminarEspacios(t,) {
    let textoSin = "";

    for (let i = 0; i < cantidadLetras; i++) {

        if (t.charAt(i) == " ") {

            textoSin = textoSin;

        }

        else {

            textoSin = textoSin + t.charAt(i);

        }

    }

    return textoSin

}

function contar(t) {
    let mayusculas = 0;
    let minusculas = 0;

    for (let i = 0; i < cantidadLetrasSin; i++) {

        if (t.charCodeAt(i) <= 122 && t.charCodeAt(i) >= 97) {

            minusculas = minusculas + 1

        }

        if (t.charCodeAt(i) <= 90 && t.charCodeAt(i) >= 65) {


            mayusculas = mayusculas + 1

        }

    }

    return "mayusculas: " + mayusculas + " minusculas: " + minusculas

}
//122 z 97 a