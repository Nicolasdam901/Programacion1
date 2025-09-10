document.querySelector("#btnBoton").addEventListener("click", analizarTexto);

function analizarTexto() {

    let textoIng = document.querySelector("#txtTexto").value;
    textoIng = textoIng.toLowerCase()
    let textoSinSimbolos = ""
    let textoInverso = ""
    let cantidadLetras = textoIng.length


    for (let i = 0; i < cantidadLetras; i++) {
        if (textoIng.charAt(i) == " " || textoIng.charAt(i) == "," || textoIng.charAt(i) == ".") {
            textoSinSimbolos = textoSinSimbolos + ""
        }
        else {
            textoSinSimbolos = textoSinSimbolos + textoIng.charAt(i)
        }
    }

    let ultimaLetra = textoSinSimbolos.length - 1

    for (let x = ultimaLetra; x >= 0; x--) {
        textoInverso = textoInverso + textoSinSimbolos.charAt(x)
    }



    if (textoSinSimbolos == textoInverso) {
        alert("Si es")
    }
    else {
        alert("No es")
    }

}