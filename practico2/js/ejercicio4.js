window.addEventListener("load",inicio);
function inicio(){
    document.querySelector("#btnMostrar").addEventListener("click", mostrar);
}

function mostrar (){
    let valor = parseInt(document.querySelector("#txtNumero").value);
   
    if(valor<0){
        
        let convertir = valor*-1
        document.querySelector("#resultado").innerHTML= convertir;
} 
        if(valor>=0){

            document.querySelector("#resultado").innerHTML= valor;
} 
}
