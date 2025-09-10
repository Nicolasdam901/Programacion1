document.querySelector("#btnEnviar1").addEventListener("click", puntosEquipo1);
document.querySelector("#btnEnviar2").addEventListener("click", puntosEquipo2);

let puntos1;
let total1 = 0;
let puntos2;
let total2 = 0;



function puntosEquipo1() {

    puntos1 = parseInt(document.querySelector("#txtPuntos1").value);

    total1 = total1 + puntos1;

    document.querySelector("#etqTotal1").innerHTML = "Total: " + total1;

    if (total1 >= 30 || total2 >= 30) {

        document.querySelector("#btnEnviar1").disabled = true;
        document.querySelector("#btnEnviar2").disabled = true;

        alert("Juego terminado!");

        document.querySelector("#etqResultado").innerHTML = "Juego terminado";

    }

}

function puntosEquipo2() {

    puntos2 = parseInt(document.querySelector("#txtPuntos2").value);

    total2 = total2 + puntos2;

    document.querySelector("#etqTotal2").innerHTML = "Total: " + total2;

    if (total1 >= 30 || total2 >= 30) {

        document.querySelector("#btnEnviar1").disabled = true;
        document.querySelector("#btnEnviar2").disabled = true;

        alert("Juego terminado!");

        document.querySelector("#etqResultado").innerHTML = "Juego terminado";

    }


}

