window.addEventListener("load", inicio);

function inicio(){
    document.querySelector("#btnIndicar").addEventListener("click", mostrar);
}

function mostrar(){
    let numero = parseInt(document.querySelector("#txtNumero").value);
    
    if (numero>=0){
        document.querySelector("#resultado").innerHTML = "positivo"  
}
    if (numero<0){
        document.querySelector("#resultado").innerHTML = "negativo"  
} 
}