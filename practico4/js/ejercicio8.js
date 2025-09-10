window.addEventListener("load", inicio);


function inicio() {

    let resultado = calcularPotencia(2, 3)
    alert(resultado)

}

function calcularPotencia(base, exponente) {


    let potencia = 1;

    for (let i = exponente; i > 0; i--) {

        potencia = base * potencia;

    }

    return potencia
}

