window.addEventListener("load",inicio);
function inicio(){
    document.querySelector("#btnSumar").addEventListener("click", sumar);
}

function sumar (){
    let valor1 = parseInt(document.querySelector("#txtValor1").value);
    let valor2 = parseInt(document.querySelector("#txtValor2").value);
    let valor3 = parseInt(document.querySelector("#txtValor3").value);
    let resultado = valor1+valor2+valor3;
    document.querySelector("#resultado").innerHTML="El resultado es: "+resultado;

}