window.addEventListener("load",inicio);

function inicio(){
    document.querySelector("#btnCalcular").addEventListener("click",calcular);
}

function calcular(){
    let numero= parseInt(document.querySelector("#txtNum1").value);
    if(numero<0 || numero>10){
        document.querySelector("#resultado").innerHTML="a esta fuera de rango";
    }else{
        document.querySelector("#resultado").innerHTML="a esta dentro de rango";
    }
} 