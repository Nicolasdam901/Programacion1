window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnCalcular").addEventListener("click", calcular)
}

let perdieron = 0;

let salvaron = 0;

let buenaNota = 0;

let cantidad = 0;

let promedio = 0;

let notas = 0;

let minimo = 100;

let max = 0;

function calcular() {

    cantidad++;

    let nota = parseInt(document.querySelector("#txtNotas").value);

    notas = (notas + nota);

    promedio = notas / cantidad;

    if (nota < minimo) {

        minimo = nota;
    }

    if (nota > max) {

        max = nota;
    }

    if (nota > 90) {

        buenaNota = buenaNota + 1;

        salvaron = salvaron + 1;

        document.querySelector("#resultado").innerHTML = "perdieron: " + perdieron + "/ " + "salvaron: " + salvaron + "/ " + "muy buena nota: " + buenaNota + "/ " + "promedio de notas: " + promedio + "/ " + "nota minima: " + minimo + "/ " + "nota maxima " + max;
    }


    else if (nota > 69) {

        salvaron = salvaron + 1;

        document.querySelector("#resultado").innerHTML = "perdieron: " + perdieron + "/ " + "salvaron: " + salvaron + "/ " + "muy buena nota: " + buenaNota + "/ " + "promedio de notas: " + promedio + "/ " + "nota minima: " + minimo + "/ " + "nota maxima " + max;
    }

    else {

        perdieron = perdieron + 1;

        document.querySelector("#resultado").innerHTML = "perdieron: " + perdieron + "/ " + "salvaron: " + salvaron + "/ " + "muy buena nota: " + buenaNota + "/ " + "promedio de notas: " + promedio + "/ " + "nota minima: " + minimo + "/ " + "nota maxima " + max;
    }



}

