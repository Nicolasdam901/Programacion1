window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", producto);
}

function producto() {

    let valor1 = parseInt(document.querySelector("#nmbValor1").value);
    let valor2 = parseInt(document.querySelector("#nmbValor2").value);
    let resultado = pares(valor1, valor2)

    document.querySelector("#msgOutput").innerHTML = resultado

    function pares(num1, num2) {

        let contador = 0;

        for (let i = num1; i <= num2; i++) {

            if (i % 2 == 0) {

                contador = contador + 1;

            }

        }

        return contador

    }

}


