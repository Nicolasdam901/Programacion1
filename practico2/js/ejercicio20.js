window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnCalcular").addEventListener("click", calcular)
}


function calcular() {

    let azucar = parseInt(document.querySelector("#txtAzucar").value);

    let harina = parseInt(document.querySelector("#txtHarina").value);

    let aceite = parseInt(document.querySelector("#txtAceite").value);

    let agua = parseInt(document.querySelector("#txtAgua").value);


    let min = parseInt(Math.min(azucar / 1, aceite / 1, agua / 1, harina / 100));
    console.log(min);


    document.querySelector("#resultado").innerHTML = "Se pueden hacer: " + min + " recetas de galletas";

}
