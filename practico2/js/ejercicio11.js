window.addEventListener("load",inicio);




function inicio(){

    document.querySelector("#btnCalcular").addEventListener("click", calcular);
        
}

function calcular(){
  
    let operacion = (document.querySelector("#txtOperacion").value);
    let numero1 = parseInt(document.querySelector("#txtNumero1").value);
    let numero2 = parseInt(document.querySelector("#txtNumero2").value);
    
 
        if(operacion == "Sumar"){

           document.querySelector("#resultado").innerHTML= numero1+numero2;
        }
  
        if(operacion == "Restar"){

            document.querySelector("#resultado").innerHTML= numero1-numero2;
       }
 
        if(operacion == "Multiplicar"){

            document.querySelector("#resultado").innerHTML= numero1*numero2;
       }
 
        if(operacion == "Dividir"){

           document.querySelector("#resultado").innerHTML= numero1/numero2;
        }
}


