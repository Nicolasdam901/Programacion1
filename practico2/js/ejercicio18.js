window.addEventListener("load",inicio);

function inicio(){
    document.querySelector("#btnCalcular").addEventListener("click",calcular);
    
}


let cantidadV=0;
let acumulador=0;

function calcular(){
    let numero=parseInt(document.querySelector("#txtNum").value);
    acumulador=acumulador+numero;
    cantidadV++;
    if(cantidadV==6){
        document.querySelector("#resultado").innerHTML=acumulador;
        document.querySelector("#btnCalcular").value="Reiniciar";
    }        

    if(cantidadV==7){
        cantidadV=0;
        acumulador=0;
    }
    
    if(cantidadV==0){
        document.querySelector("#resultado").innerHTML=" ";   
        document.querySelector("#btnCalcular").value ="Suma total";

    } 
    
}