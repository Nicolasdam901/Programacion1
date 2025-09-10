window.addEventListener("load", inicio);




function inicio() {
    document.querySelector("#btnCalcularImc").addEventListener("click", calcularImc);

}


function calcularImc() {
    let peso = parseInt(document.querySelector("#txtPeso").value);
    let altura = parseFloat(document.querySelector("#txtAltura").value);
    let imc = peso / (altura * altura);
    document.querySelector("#resultadoImc").innerHTML = "El índice de masa corporal (IMC) es:" + " " + imc;
}