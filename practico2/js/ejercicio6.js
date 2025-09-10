window.addEventListener("load" , inicio);


function inicio(){
    document.querySelector("#btnMostrar").addEventListener("click", multiplo);
}

function multiplo(){
    let valor  = parseInt(document.querySelector("#txtNumero").value);
   
    if(valor%7==0){


        if(valor%3==0){

            document.querySelector("#resultado").innerHTML ="es múltiplo de 7 y de 3";
            
        }
        else document.querySelector("#resultado").innerHTML =" ";
    }
   else document.querySelector("#resultado").innerHTML =" ";
}