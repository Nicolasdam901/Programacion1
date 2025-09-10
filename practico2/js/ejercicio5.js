window.addEventListener("load", inicio);



function inicio(){
    document.querySelector("#btnMostrar").addEventListener("click", mostrar);
}

function mostrar (){
    let valor  = parseInt(document.querySelector("#txtNumero").value);

        if(valor>10){
            
            if(valor<20){
                document.querySelector("#resultado").innerHTML ="es mayor que 10 y menor que 20";
            }    
            else document.querySelector("#resultado").innerHTML =" ";  
        }
         else document.querySelector("#resultado").innerHTML =" ";
    }