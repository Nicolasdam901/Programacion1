window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnFactorial").addEventListener("click", factorial);
}

function factorial() {
    let valor = parseInt(document.querySelector("#nmb1").value);
    let fact = 1;
    for (let i = 1; i <= valor; i++) {
        fact = fact * i;
    }
    document.querySelector("#msgOutput").innerHTML = "!" + valor + " = " + fact;
}