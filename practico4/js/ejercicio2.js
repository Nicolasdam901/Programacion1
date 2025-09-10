window.addEventListener("load", inicio);

function inicio() {

    let resultado = esMayor(25, 26)

    if (resultado == true) {

        alert("Es mayor")

    } else {

        alert("No es mayor")
    }
    function esMayor(edad, tope) {

        if (edad > tope) {

            return true;
        }
        else {

            return false;
        }
    }
}