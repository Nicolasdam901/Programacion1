window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrar").addEventListener("click", mostrar);

}

function mostrar() {
    let texto = document.querySelector("#txtTexto").value;

    let resultado = convertirlo(texto)

    document.querySelector("#result").innerHTML = resultado;

}



function convertirlo(t) {

    mayusculas = t.toUpperCase()

    return mayusculas

}

