window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnImprimir").addEventListener("click", dibujar);
}

function dibujar() {
    document.querySelector("#msgOutput").innerHTML = "";
    let base = parseInt(document.querySelector("#nmbBase").value);
    let altura = parseInt(document.querySelector("#nmbAltura").value);

    for (let i = 0; i < altura; i++) {
        for (let x = 0; x < base; x++) {
            document.querySelector("#msgOutput").innerHTML += "0";
        }
        document.querySelector("#msgOutput").innerHTML += "<br>";
    }
}