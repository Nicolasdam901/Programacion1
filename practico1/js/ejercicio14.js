window.addEventListener("load", inicio);

let contador = 0;
function inicio() {
    document.querySelector("#btnContador").addEventListener("click", conteo);

}
function conteo() {
    contador = contador + 3;

    document.querySelector("#registro").innerHTML = "Cantidad de clicks: " + contador;



}
