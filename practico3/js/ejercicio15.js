window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", digitos);
}

function digitos() {
    let numero = parseFloat(document.querySelector("#nmb1").value);
    if (numero >= 2000) {
        do {
            numero = numero / 20;
        } while (numero >= 100)

        document.querySelector("#msgOutput").innerHTML = numero;
    } else {
        document.querySelector("#msgOutput").innerHTML = "El numero debe ser mayor a 2000";
    }

}