window.addEventListener("load",inicio);
function inicio(){
    document.querySelector("#btnComprobar").addEventListener("click", comprobar);
}

function comprobar (){
    let valor = parseInt(document.querySelector("#txtValor").value);
   
    if (valor>20){
        document.querySelector("#resultado").innerHTML = "Es mayor que 20";  
}
    if (valor<=20){
    document.querySelector("#resultado").innerHTML = "Es menor o igual a 20";  
}
}