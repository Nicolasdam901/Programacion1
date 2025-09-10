window.addEventListener("load", inicio);

function inicio(){
    document.querySelector("#btnMostrar").addEventListener("click", mostrar);
}

function mostrar(){
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;

    document.querySelector("#resultado").innerHTML = apellido+", "+nombre;
}