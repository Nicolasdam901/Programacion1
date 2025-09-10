window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", imprimir);
}

function imprimir() {
    for (let i = 20; i >= -30; i--) {
        document.querySelector("#msgNumeros").innerHTML += i + "<br>";
    }
}