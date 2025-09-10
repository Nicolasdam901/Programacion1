window.addEventListener("load", inicio);



function inicio() {
    document.querySelector("#btnCalcular").addEventListener("click", calculo);

}

function calculo() {
    let ganados = parseInt(document.querySelector("#txtGanados").value);
    let empatados = parseInt(document.querySelector("#txtEmpatados").value);
    let resultado = (ganados * 3) + empatados;

    document.querySelector("#puntosFinales").innerHTML = "puntos obtenidos: " + resultado;
}