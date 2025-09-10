window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", imprimir);
}

function imprimir() {
    for (let i = 1; i <= 1000; i++) {
        document.querySelector("#msgNumeros").innerHTML += i + "<br>";
    }
}