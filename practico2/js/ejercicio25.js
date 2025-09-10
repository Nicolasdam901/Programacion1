//botones
document.querySelector("#btnStock").addEventListener("click", sumarStock);
document.querySelector("#btnSolicitar").addEventListener("click", solicitud);
document.querySelector("#btnEstadisticas").addEventListener("click", estadisticas);

//variables
let stockTotal = 0;
let stockIngresado;
let cantidadSolicitud;
let cantidadMaxima = 0;
let estadistica;
let nombre;
let nombreMaximo;
let pedidos = 0
let boton;


//funcion de ingresar Stock
function sumarStock() {

    stockIngresado = parseInt(document.querySelector("#txtStock").value);
    stockTotal = stockTotal + stockIngresado;
    if (stockIngresado > 0) {
        alert("Se actualizo el Stock exitosamente");
        document.querySelector("#txtCantidad").value = "0";
        document.querySelector("#btnSolicitar").disabled = false;
    } else {
        alert("Error al actualizar el Stock");
        document.querySelector("#txtCantidad").value = "0";
    }

}

//Solicitar Stock
function solicitud() {

    nombre = document.querySelector("#txtNombre").value;
    cantidadSolicitud = parseInt(document.querySelector("#txtCantidad").value);

    if (cantidadSolicitud <= stockTotal) {

        if (cantidadSolicitud > cantidadMaxima) {
            cantidadMaxima = cantidadSolicitud;
            nombreMaximo = nombre;
        }

        stockTotal = stockTotal - cantidadSolicitud;

        alert("Stock retirado con exito, Gracias!");

        document.querySelector("#txtNombre").value = "";
        document.querySelector("#txtCantidad").value = "0";

        pedidos++;

    } else {

        if (stockTotal < 1) {
            document.querySelector("#btnSolicitar").disabled = true;
            alert("No queda stock disponible");
        } else {
            alert("No hay suficiente stock disponible.\nStock Disponible: " + stockTotal);
            document.querySelector("#txtNombre").value = "";
            document.querySelector("#txtCantidad").value = "0";
        }


    }

}

//Ver estadisticas de las solicitudes
function estadisticas() {

    if (nombreMaximo == undefined) {
        alert("Error: No hay compras registradas");
    } else {
        document.querySelector("#etqResultado").innerHTML = "Maximo comprador:";
        document.querySelector("#etqNombre").innerHTML = "Nombre: " + nombreMaximo;
        document.querySelector("#etqCantidad").innerHTML = "Cantidad: " + cantidadMaxima;
        document.querySelector("#etqComprasTotales").innerHTML = "Compras totales:";
        document.querySelector("#etqTotal").innerHTML = "Cantidad: " + pedidos;

    }
}