window.addEventListener("load",inicio);
function inicio(){
    document.querySelector("#btnCalcular").addEventListener("click", calcular);
}

function calcular (){
    let valor1 = parseInt(document.querySelector("#txtValor1").value);
    let valor2 = parseInt(document.querySelector("#txtValor2").value);
    let valor3 = parseInt(document.querySelector("#txtValor3").value);
    let resultado = (valor1*valor1)-(valor2+valor3);
    document.querySelector("#resultado").innerHTML="El resultado es: "+resultado;

}