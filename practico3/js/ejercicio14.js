window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", digitos);
}

function digitos() {
    let numero = parseFloat(document.querySelector("#nmb1").value);
    let contador = 0;

    do {
        numero = numero / 10;
        contador++
    } while (numero >= 1)

    document.querySelector("#msgOutput").innerHTML = contador + " cifra/s";
}