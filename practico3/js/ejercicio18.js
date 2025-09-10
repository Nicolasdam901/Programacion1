window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", producto);
}

function producto() {
    document.querySelector("#etqResultado").innerHTML = "";
    let valor1 = 30;
    let valor2 = 200;
    let valor3 = parseInt(document.querySelector("#txtValor3").value);

    for (let i = valor1; i < valor2; i++) {
        if (i % valor3 == 0 && i % 2 == 0) {
            document.querySelector("#etqResultado").innerHTML += i + "<br>";
        }
    }
}

