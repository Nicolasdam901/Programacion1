window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrar").addEventListener("click", mostrar);

}

function mostrar() {
    let texto = document.querySelector("#txtTexto").value;

    let resultado = matrícula(texto)

    document.querySelector("#result").innerHTML = resultado;

}



function matrícula(t) {

    if (t.charAt(0) == "A") {

        return "Canelones"

    }

    if (t.charAt(0) == "B") {

        return "Maldonado"

    }

    if (t.charAt(0) == "C") {

        return "Rocha"

    }

    if (t.charAt(0) == "D") {

        return "Treinta y Tres"

    }

    if (t.charAt(0) == "E") {

        return "Cerro Largo"

    }

    if (t.charAt(0) == "F") {

        return "Rivera"

    }

    if (t.charAt(0) == "G") {

        return "Artigas"

    }

    if (t.charAt(0) == "H") {

        return "Salto"

    }

    if (t.charAt(0) == "I") {

        return "Paysandú"

    }

    if (t.charAt(0) == "J") {

        return "Río Negro"


    }

    if (t.charAt(0) == "K") {

        return "Soriano"


    }

    if (t.charAt(0) == "L") {

        return "Colonia"

    }

    if (t.charAt(0) == "M") {

        return "San José"

    }

    if (t.charAt(0) == "N") {

        return "Flores"

    }

    if (t.charAt(0) == "O") {

        return "Florida"

    }

    if (t.charAt(0) == "P") {

        return "Lavalleja"

    }

    if (t.charAt(0) == "Q") {

        return "Durazno"

    }

    if (t.charAt(0) == "R") {

        return "Tacuarembó"

    }

    if (t.charAt(0) == "S") {

        return "Montevideo"

    }

}





