window.addEventListener("load", inicio);

let contador = 0;
function inicio() {
    document.querySelector("#btnContador").addEventListener("click", conteo);

}
function conteo() {
    let valor = parseInt(document.querySelector("#txtSuma").value);
    contador = contador + valor;

    document.querySelector("#registro").innerHTML = "Resultado: " + contador;

}
