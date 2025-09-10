window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnMostrar").addEventListener("click", codigoD);
}
 
function codigoD() {
    let letra = document.querySelector("#txtLetra").value;
    switch (letra) {
        case "A":
            document.querySelector("#resultado").innerHTML = "Canelones";
            break;

        case "B":
            document.querySelector("#resultado").innerHTML = "Maldonado";
            break;

        case "C":
            document.querySelector("#resultado").innerHTML = "Rocha";
            break;

        case "D":
            document.querySelector("#resultado").innerHTML = "Treinta y Tres";
            break;

        case "E":
            document.querySelector("#resultado").innerHTML = "Cerro Largo";
            break;

        case "F":
            document.querySelector("#resultado").innerHTML = "Rivera";
            break;

        case "G":
            document.querySelector("#resultado").innerHTML = "Artigas";
            break;

        case "H":
            document.querySelector("#resultado").innerHTML = "Salto";
            break;

        case "I":
            document.querySelector("#resultado").innerHTML = "Paysandu";
            break;

        case "J":
            document.querySelector("#resultado").innerHTML = "Rio Negro";
            break;

        case "K":
            document.querySelector("#resultado").innerHTML = "Soriano";
            break;

        case "L":
            document.querySelector("#resultado").innerHTML = "Colonia";
            break;

        case "M":
            document.querySelector("#resultado").innerHTML = "San Jose";
            break;

        case "N":
            document.querySelector("#resultado").innerHTML = "Flores";
            break;

        case "O":
            document.querySelector("#resultado").innerHTML = "Florida";
            break;

        case "P":
            document.querySelector("#resultado").innerHTML = "Lavalleja";
            break;

        case "Q":
            document.querySelector("#resultado").innerHTML = "Durazno";
            break;

        case "R":
            document.querySelector("#resultado").innerHTML = "Tacuarembo";
            break;

        case "S":
            document.querySelector("#resultado").innerHTML = "Montevideo";
            break;
    }




}