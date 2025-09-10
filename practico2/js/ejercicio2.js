window.addEventListener("load",inicio);
function inicio(){
    document.querySelector("#btnComprobar").addEventListener("click", comprobar);
}

function comprobar (){
    let valor = parseInt(document.querySelector("#txtValor").value);
   
    if (valor>10){
        document.querySelector("#resultado").innerHTML = "Mayor que diez";  
}
    if (valor<=10){
    document.querySelector("#resultado").innerHTML = " ";  
}
}