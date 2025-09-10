window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrar").addEventListener("click", mostrar);

}

function mostrar() {
    let texto = document.querySelector("#txtTexto").value;
    ultimaPosicion = (texto.length - 1)
    let resultado = invertir(texto)

    document.querySelector("#result").innerHTML = resultado;

}



function invertir(a) {
    let invertido = "";

    for (let i = ultimaPosicion; i > -1; i--) {

        invertido = invertido + a.charAt(i);

    }

    return invertido

}

