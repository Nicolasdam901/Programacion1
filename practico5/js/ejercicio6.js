window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrar").addEventListener("click", mostrar);

}

function mostrar() {
    let texto1 = document.querySelector("#txtTexto1").value;
    let texto2 = document.querySelector("#txtTexto2").value;
    cantidadLetras1 = (texto1.length)
    cantidadLetras2 = (texto2.length)

    let resultado = subcadena(texto1, texto2)

    document.querySelector("#result").innerHTML = resultado;

}



function subcadena(t1, t2) {
    contador = 0;

    for (let i = 0; i < cantidadLetras1; i++) {

        if (t2.substring(0, cantidadLetras2) == t1.substring(i, cantidadLetras2 + i)) {

            i = cantidadLetras1;

            contador++;
        }

    }

    if (contador == 1) {

        return "Es subcadena"

    }

    else {

        return "No es subcadena"

    }

}