window.addEventListener("load", inicio);

function inicio() {

    let resultado = esBisiesto(1900)

    if (resultado == true) {

        alert("Es Bisiesto")

    } else {

        alert("No es Bisiesto")
    }

    function esBisiesto(a) {


        if (a % 400 == 0) {


            return true;

        }

        else if (a % 4 == 0 && a % 100 != 0) {

            return true;
        }

        else {

            return false
        }

    }
}