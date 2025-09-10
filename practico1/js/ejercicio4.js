window.addEventListener("load",inicio);
function inicio(){
    document.querySelector("#btnCalcular").addEventListener("click", calcular);
}

function calcular (){
    let valor1 = parseInt(document.querySelector("#txtValor1").value);
    let valor2 = parseInt(document.querySelector("#txtValor2").value);
    let suma = valor1+valor2;
    let multiplicacion = valor1*valor2;
    document.querySelector("#suma").innerHTML="Suma: "+suma;
    document.querySelector("#multiplicacion").innerHTML="Multiplicación: "+multiplicacion;

}