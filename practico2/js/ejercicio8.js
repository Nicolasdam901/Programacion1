window.addEventListener("load",inicio);
function inicio(){
    document.querySelector("#btnMostrar").addEventListener("click", cumple);
}

function cumple (){
   
    let valor = parseInt(document.querySelector("#txtNumero").value);
    
    if(valor>30){
        
        document.querySelector("#resultado").innerHTML="Es mayor que 30";
    }
   
    
    if(valor<10){
        
        document.querySelector("#resultado").innerHTML="Es menor que 10";
        
        
    } 
   if(valor>=10 && valor<=30){

    document.querySelector("#resultado").innerHTML="Entre 10 y 30";
   }
    
}