window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", imprimir);
}

function imprimir() {
    for (let i = 1; i <= 450; i++) {
        if (i % 5 == 0) {
            document.querySelector("#msgNumeros").innerHTML += i + "<br>";
        }
    }
}