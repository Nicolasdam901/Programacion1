window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnCalcular").addEventListener("click", calcularAreaRectangulo);
}

function calcularAreaRectangulo() {

    let anchoIng = parseFloat(document.querySelector("#txtAncho").value)
    let alturaIng = parseFloat(document.querySelector("#txtAltura").value)
    let resultado = areaTriangulo(anchoIng, alturaIng)

    document.querySelector("#etqResultado").innerHTML = resultado
}

function areaTriangulo(ancho, altura) {

    if (ancho < 0 || altura < 0) {

        return -1

    } else {

        resultado = (ancho * altura)

        return resultado
    }
}