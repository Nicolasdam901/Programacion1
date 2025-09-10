window.addEventListener("load", inicio);

function inicio() {
   
    document.querySelector("#btnCalcular").addEventListener("click", dividir);
}

function dividir() {
   
    let dividendo = parseInt(document.querySelector("#txtDividendo").value);
    let divisor = parseInt(document.querySelector("#txtDivisor").value);
    let veces = 0;
    resultado = dividendo;

     while (resultado >= divisor) {

        veces++;
        resultado = resultado - divisor

    }
    cociente = veces;
    resto = resultado;
   
    document.querySelector("#etqCociente").innerHTML = veces;
    document.querySelector("#etqResto").innerHTML = resultado;

}
