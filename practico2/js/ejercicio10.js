window.addEventListener("load", inicio);




function inicio(){
    document.querySelector("#btnCalcular").addEventListener("click", calcular);
}

function calcular(){
   
    let numero1 = parseInt(document.querySelector("#txtNumero1").value);
    let numero2 = parseInt(document.querySelector("#txtNumero2").value);
    
    if(numero1>numero2){

        document.querySelector("#resultado").innerHTML = numero1-numero2;
        }

    else document.querySelector("#resultado").innerHTML = numero2-numero1;
}