window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnCalcular").addEventListener("click", calculoArea);
}

function calculoArea() {

    let baseIng = parseFloat(document.querySelector("#txtBase").value)
    let alturaIng = parseFloat(document.querySelector("#txtAltura").value)
    let resultado = areaTriangulo(baseIng, alturaIng)

    document.querySelector("#etqResultado").innerHTML = resultado
}

function areaTriangulo(base, altura) {

    if (base < 0 || altura < 0) {

        return -1

    } else {

        resultado = (base * altura) / 2

        return resultado
    }
}