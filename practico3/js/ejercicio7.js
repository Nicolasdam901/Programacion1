window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", imprimir);
}

function imprimir() {
    let guiones = parseInt(document.querySelector("#txtCantGuiones").value);
    if (guiones >= 2 && guiones <= 50) {
        document.querySelector("#msgLinea").innerHTML = "";
        for (let i = 1; i <= guiones; i++) {
            document.querySelector("#msgLinea").innerHTML += "-";
        }
    } else {
        document.querySelector("#msgLinea").innerHTML = "Ese numero no es válido";
    }
}