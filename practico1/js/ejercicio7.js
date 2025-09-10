window.addEventListener("load",inicio);
function inicio(){
    document.querySelector("#btnDividir").addEventListener("click", dividir);
}

function dividir (){
    let valor1 = parseInt(document.querySelector("#txtValor1").value);
    let valor2 = parseInt(document.querySelector("#txtValor2").value);
    let resto = valor1%valor2;
    document.querySelector("#resultado").innerHTML="El resto es "+resto;


}