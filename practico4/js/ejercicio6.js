window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnConversion").addEventListener("click", dato);
}

function dato() {

    let celsius = parseFloat(document.querySelector("#txtCelsius").value);

    let resultado = fahr(celsius)

    document.querySelector("#etqResultado").innerHTML = resultado
}

function fahr(a) {

    resultado = (1.8 * a + 32)

    return resultado


}