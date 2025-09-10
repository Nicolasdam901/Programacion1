window.addEventListener("load",inicio);

function inicio(){
    document.querySelector("#btnCalcular").addEventListener("click",calcular);
}

function calcular(){
    let numero1= parseInt(document.querySelector("#txtNum1").value);
    let numero2= parseInt(document.querySelector("#txtNum2").value);

    if(numero1%numero2==0){
        document.querySelector("#resultado").innerHTML="Es multiplo";
    }else{
        document.querySelector("#resultado").innerHTML="No es multiplo";
    }
}