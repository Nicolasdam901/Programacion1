window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", imprimir);
}

function imprimir() {
    for (let i = -100; i <= 10; i++) {
        document.querySelector("#msgNumeros").innerHTML += i + "<br>";
    }
}