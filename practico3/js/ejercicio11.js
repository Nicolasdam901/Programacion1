window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", producto);
}

function producto() {
    document.querySelector("#msgOutput").innerHTML = "";
    let valor1 = parseInt(document.querySelector("#nmbValor1").value);
    let valor2 = parseInt(document.querySelector("#nmbValor2").value);
    let valor3 = parseInt(document.querySelector("#nmbValor3").value);

    if (valor1 > valor2) {
        for (let i = valor2; i < valor1; i++) {
            if (i % valor3 == 0) {
                document.querySelector("#msgOutput").innerHTML += i + "<br>";
            }
        }
    }

    if (valor1 < valor2) {
        for (let i = valor1; i < valor2; i++) {
            if (i % valor3 == 0) {
                document.querySelector("#msgOutput").innerHTML += i + "<br>";
            }
        }
    }


}