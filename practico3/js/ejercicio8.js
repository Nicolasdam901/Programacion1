window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", imprimir);
}

function imprimir() {

    let valor1 = parseInt(document.querySelector("#txtValor1").value);
    let valor2 = parseInt(document.querySelector("#txtValor2").value);

    if (valor1 > valor2) {
        document.querySelector("#msgOutput").innerHTML = "";
        for (let i = valor2; i <= valor1; i++) {
            document.querySelector("#msgOutput").innerHTML += i + "<br>";
        }
    } else if (valor1 < valor2) {
        document.querySelector("#msgOutput").innerHTML = "";
        for (let i = valor1; i <= valor2; i++) {
            document.querySelector("#msgOutput").innerHTML += i + "<br>";
        }
    } else {
        document.querySelector("#msgOutput").innerHTML = "Son iguales";
    }
}