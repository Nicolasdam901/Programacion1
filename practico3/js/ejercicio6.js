window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", imprimir);
}

function imprimir() {
    for (let i = -33; i <= 230; i++) {
        if (i % 4 == 0) {
            document.querySelector("#msgNumeros").innerHTML += i + "<br>";
        }
    }
}