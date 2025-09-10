window.addEventListener("load",inicio);

function inicio(){
    document.querySelector("#btnCalcular").addEventListener("click",funcionIF);
}
 
function funcionIF(){
    let a=parseInt(document.querySelector("#txtNum1").value);
    let b=parseInt(document.querySelector("#txtNum2").value);
    let c=parseInt(document.querySelector("#txtNum3").value);
    if(a>b && a>c){
        document.querySelector("#resultado").innerHTML ="a es el mayor de los 3";
    }
    else document.querySelector("#resultado").innerHTML =" ";

} 