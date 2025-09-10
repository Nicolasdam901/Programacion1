window.addEventListener("load",inicio);

function inicio(){
    document.querySelector("#btnCalcular").addEventListener("click", calcular);
}
 
function calcular(){
    let Plus=document.querySelector("#txtPlus").value;
    let millas=parseInt(document.querySelector("#txtMillas").value);
    if(Plus=="Si"){
        millas=millas*2;
    }

    if(millas>=60000){
        document.querySelector("#resultado").innerHTML="Europa";
    }else if(millas>=30000){
        document.querySelector("#resultado").innerHTML="America del Norte";
    }else if(millas>=15000){
        document.querySelector("#resultado").innerHTML="America del Sur";   
    }else{
        document.querySelector("#resultado").innerHTML="No dispone de millas suficientes"; 
    }
    }