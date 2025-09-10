window.addEventListener("load", inicio);




function inicio() {
    document.querySelector("#btnLeer").addEventListener("click", indicar);

}


function indicar(){

    let caracter = (document.querySelector("#txtCaracter").value);

        if(caracter=="a" || caracter=="e" || caracter=="i" || caracter=="o" || caracter=="u"){

            document.querySelector("#indicar").innerHTML = "es una vocal";
         }       

        else document.querySelector("#indicar").innerHTML = "no es una vocal";

}  