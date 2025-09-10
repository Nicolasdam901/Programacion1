window.addEventListener("load",inicio);




function inicio(){

    document.querySelector("#btnSalida").addEventListener("click", salida);
        
}

function salida(){
    
    let dia = (document.querySelector("#txtDia").value);
    let temp = parseInt(document.querySelector("#txtTemp").value);
    
    document.querySelector("#levantarse").innerHTML= "Levantarse";

    if(temp<10){

        document.querySelector("#temperatura").innerHTML= "Abrigarse mucho";
    }
     
    if(temp>20){
        
        document.querySelector("#temperatura").innerHTML="Ponerse ropa cómoda";
    } 
  
    if(temp>=10 && temp<=20){

        document.querySelector("#temperatura").innerHTML="Abrigo moderado";
    }
    
    if(dia == "Domingo"){

        document.querySelector("#trabajo").innerHTML= "Quedarse en casa, hoy no trabaja";
    }
    
    else document.querySelector("#trabajo").innerHTML= "Ir al trabajo";
}


