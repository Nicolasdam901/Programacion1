window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrar").addEventListener("click", mostrar);

}

function mostrar() {
    let texto = document.querySelector("#txtTexto").value;
    ultimoCaracter = (texto.length - 1)

    let resultado = mismaLetra(texto)

    document.querySelector("#result").innerHTML = resultado;

}



function mismaLetra(t) {

    if (t.charAt(0) == (t.charAt(ultimoCaracter))) {

        return "Comienza y termina con la misma letra"

    }

    else {

        return "No comienza y termina con la misma letra"

    }

}





