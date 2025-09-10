window.addEventListener("load",inicio);
function inicio(){
    document.querySelector("#btnMostrar").addEventListener("click", cumple);
}

function cumple (){
   
    let valor = parseInt(document.querySelector("#txtNumero").value);
    
    if(valor<-20 || valor>20){
        
        document.querySelector("#resultado").innerHTML="CUMPLE";
    }
        else document.querySelector("#resultado").innerHTML="NO CUMPLE";
        
}