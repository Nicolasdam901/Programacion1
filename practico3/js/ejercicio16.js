window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", imprimir);
}

function imprimir() {
    let num1 = parseInt(document.querySelector("#nmb1").value);
    let num2 = parseInt(document.querySelector("#nmb2").value);
    let resultado = "No hay resultados posibles";
    let temporal;


    if (num1 < num2) {
        temporal = num2;
        num2 = num1;
        num1 = temporal;
    }


    if (num1 >= num2) {

        for (let i = num2; i <= num1; i++) {
            if ((i % 4 == 0) && (i % 6 == 0)) {
                resultado = i;
                i = num1 + 1;
            }
        }

        document.querySelector("#msgOutput").innerHTML = resultado;

    }
}