window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", producto);
}

function producto() {
    let valor1 = parseInt(document.querySelector("#nmbValor1").value);
    let valor2 = parseInt(document.querySelector("#nmbValor2").value);
    let producto = 0;

    for (let i = valor1; i <= valor2; i++) {
        producto = valor1 * i;
        document.querySelector("#msgOutput").innerHTML += valor1 + " * " + i + " = " + producto + "<br>";
    }


}