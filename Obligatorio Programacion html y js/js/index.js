window.addEventListener("load", inicio);
window.addEventListener("load", botonesGeneral);

function inicio() {
    mostrarLoginPersona()
}

function botonesGeneral() {
    asignarBotones();
    asignarBotonesMenu();
}

function ocultarTodo() {
    //Login Persona, Local y registro:
    document.querySelector("#pantallaPrincipalPersona").style.display = "none";
    document.querySelector("#pantallaLoginPersona").style.display = "none";
    document.querySelector("#pantallaLoginLocal").style.display = "none";
    document.querySelector("#pantallaRegistroPersona").style.display = "none";
    document.querySelector("#pantallaPrincipalLocal").style.display = "none";
    //Ocultar en Pantalla Principal Persona:
    document.querySelector("#pantallaReservasPrincipalPersona").style.display = "none";
    document.querySelector("#pantallaPendientesPrincipalPersona").style.display = "none";
    document.querySelector("#pantallaEstadisticasPrincipalPersona").style.display = "none";
    document.querySelector("#pantallaCalificacionesPrincipalPersona").style.display = "none";
    //Ocultar en Pantalla Principal Local:
    document.querySelector("#pantallaPrincipalInfoLocal").style.display = "none";
    document.querySelector("#pantallaPrincipalEstadisticasLocal").style.display = "none";
    document.querySelector("#pantallaPrincipalGestionReservasLocal").style.display = "none";
}

function asignarBotones() {
    //document.querySelector("#btnIngresarPersona").addEventListener("click", mostrarPrincipalPersona);
    //document.querySelector("#btnIngresarLocal").addEventListener("click", mostrarPrincipalLocal);
    document.querySelector("#btnVolverLoginPersona").addEventListener("click", mostrarLoginPersona);
    document.querySelector("#btnVolverRegistroALogPersona").addEventListener("click", mostrarLoginPersona);
    document.querySelector("#btnVolverPrinPersonaALogin").addEventListener("click", mostrarLoginPersona);
    document.querySelector("#btnLoginComoLocal").addEventListener("click", mostrarLoginLocal);
    document.querySelector("#btnVolverPrinLocalALogin").addEventListener("click", mostrarLoginLocal);
    document.querySelector("#btnRegistroPersona").addEventListener("click", mostrarRegistroPersona);
}

function asignarBotonesMenu() {
    //Menu Pantalla PERSONA
    document.querySelector("#btnPantallaReservasPersona").addEventListener("click", mostrarPantallaReservasPersona);
    document.querySelector("#btnPantallaPendientesPersona").addEventListener("click", mostrarPantallaPendientesPersona);
    document.querySelector("#btnPantallaEstadisticasPersona").addEventListener("click", mostrarPantallaEstadisticasPersona);
    document.querySelector("#btnPantallaCalificacionesPersona").addEventListener("click", mostrarPantallaCalificacionesPersona);
    //menu Pantalla LOCAL
    document.querySelector("#btnPantallaInfoLocal").addEventListener("click", mostrarPantallaInfoLocal);
    document.querySelector("#btnPantallaEstadisticasLocal").addEventListener("click", mostrarPantallaEstadisticasLocal);
    document.querySelector("#btnPantallaGestionReservasLocal").addEventListener("click", mostrarPantallaGestionReservasLocal);
}

function mostrarPrincipalPersona() {
    ocultarTodo();
    document.querySelector("#pantallaPrincipalPersona").style.display = "block";
    document.querySelector("#botonesOpcionesPrincipalPersona").style.display = "block";
}

function mostrarLoginPersona() {
    ocultarTodo();
    document.querySelector("#pantallaLoginPersona").style.display = "block";
}

function mostrarLoginLocal() {
    ocultarTodo();
    document.querySelector("#pantallaLoginLocal").style.display = "block";
}

function mostrarRegistroPersona() {
    ocultarTodo();
    document.querySelector("#pantallaRegistroPersona").style.display = "block";
}

function mostrarPrincipalLocal() {
    ocultarTodo();
    document.querySelector("#pantallaPrincipalLocal").style.display = "block";
    document.querySelector("#botonesOpcionesPrincipalLocal").style.display = "block";
}

//funciones botones menu Pantalla Principal PERSONA

function mostrarPantallaReservasPersona() {
    //muestra todo menos div interiores
    ocultarTodo();
    document.querySelector("#pantallaPrincipalPersona").style.display = "block";
    document.querySelector("#botonesOpcionesPrincipalPersona").style.display = "block";
    //muestra sub pantalla interior
    document.querySelector("#pantallaReservasPrincipalPersona").style.display = "block";
}

function mostrarPantallaPendientesPersona() {
    ocultarTodo();
    document.querySelector("#pantallaPrincipalPersona").style.display = "block";
    document.querySelector("#botonesOpcionesPrincipalPersona").style.display = "block";
    document.querySelector("#pantallaPendientesPrincipalPersona").style.display = "block";
    mostrarReservasPendientesUsuario()
}

function mostrarPantallaEstadisticasPersona() {
    ocultarTodo();
    document.querySelector("#pantallaPrincipalPersona").style.display = "block";
    document.querySelector("#botonesOpcionesPrincipalPersona").style.display = "block";
    document.querySelector("#pantallaEstadisticasPrincipalPersona").style.display = "block";
}

function mostrarPantallaCalificacionesPersona() {
    ocultarTodo();
    document.querySelector("#pantallaPrincipalPersona").style.display = "block";
    document.querySelector("#botonesOpcionesPrincipalPersona").style.display = "block";
    document.querySelector("#pantallaCalificacionesPrincipalPersona").style.display = "block";
    calificarResvasFinalizadasUsuario()
}

// Funciones Menu Pantalla Principal LOCAL

function mostrarPantallaInfoLocal() {
    //muestra todo menos div interiores
    ocultarTodo();
    document.querySelector("#pantallaPrincipalLocal").style.display = "block";
    document.querySelector("#botonesOpcionesPrincipalLocal").style.display = "block";
    //muestra sub pantalla interior
    document.querySelector("#pantallaPrincipalInfoLocal").style.display = "block";
    mostrarDetalleReservaUsuarioLocal()
}

function mostrarPantallaEstadisticasLocal() {
    ocultarTodo();
    document.querySelector("#pantallaPrincipalLocal").style.display = "block";
    document.querySelector("#botonesOpcionesPrincipalLocal").style.display = "block";
    document.querySelector("#pantallaPrincipalEstadisticasLocal").style.display = "block";
    mostrarEstadisticasLocal()
}

function mostrarPantallaGestionReservasLocal() {
    ocultarTodo();
    document.querySelector("#pantallaPrincipalLocal").style.display = "block";
    document.querySelector("#pantallaPrincipalGestionReservasLocal").style.display = "block";
}



//Funcion Registro Persona

class Persona {
    constructor(unId, unNombre, unUsuario, unPass) {
        this.id = unId;
        this.nombre = unNombre;
        this.usuario = unUsuario;
        this.pass = unPass
    }
}


document.querySelector("#btnCargarRegistroPersona").addEventListener("click", registrarPersona);
// genero el array 
let arrayPersonas = new Array();
personaTest = new Persona(1, "Nicolas", "nico", "Nicolas123")
personaTest2 = new Persona(2, "Marcos", "marcos", "Marcos123")
personaTest3 = new Persona(3, "Facundo", "facundo", "Facundo123")
personaTest4 = new Persona(4, "Lucia", "lucia", "Lucia123")
personaTest5 = new Persona(5, "Maria", "maria", "Maria123")
personaTest6 = new Persona(6, "Juan", "juan", "Juan123")
personaTest7 = new Persona(7, "Pedro", "pedro", "Pedro123")


arrayPersonas.push(personaTest, personaTest2, personaTest3, personaTest4, personaTest5, personaTest6, personaTest7)





// esto es para que el contador sea automático
let contadorDePersonas = 8;

function repetido(usuario) {
    for (i = 0; i < arrayPersonas.length; i++) {
        if (usuario.toLowerCase() == "") {
            document.querySelector("#etqMensajeErrorRegistroPersona").innerHTML = "Ingrese Nombre Usuario Valido"

            return true
        }

        if ((arrayPersonas[i].usuario).toLowerCase() == usuario.toLowerCase()) {
            document.querySelector("#etqMensajeErrorRegistroPersona").innerHTML = "Usuario repetido"

            return true
        }
    }
    for (i = 0; i < arrayLocalesPrecargados.length; i++) {
        if ((arrayLocalesPrecargados[i].usuario).toLowerCase() == usuario.toLowerCase()) {
            document.querySelector("#etqMensajeErrorRegistroPersona").innerHTML = "Usuario repetido"

            return true
        }
    }
    return false
}

function passValido(pass) {
    if (pass.length < 6) {
        document.querySelector("#etqMensajeErrorRegistroPersona").innerHTML = "El pass debe tener 6 caracteres como minimo";
        return false
    }

    let validarNumerosEnPass = 0
    let validarLetrasMayusculas = 0
    let validarMinusculasEnPass = 0

    for (let i = 0; i < pass.length; i++) {
        // validar si tiene mayuscula
        if (pass.charAt(i) == pass.charAt(i).toUpperCase()) {
            //validar si pass tiene numero
            if (pass.charAt(i) == "0" || pass.charAt(i) == "1" || pass.charAt(i) == "2" || pass.charAt(i) == "3" || pass.charAt(i) == "4"
                || pass.charAt(i) == "5" || pass.charAt(i) == "6" || pass.charAt(i) == "7" || pass.charAt(i) == "8" || pass.charAt(i) == "9") {
                validarNumerosEnPass++
            }
            else {
                validarLetrasMayusculas++
            }
        }
        // Validar si pass tiene minuscula
        if (pass.charAt(i) == pass.charAt(i).toLowerCase()) {
            if (pass.charAt(i) == "0" || pass.charAt(i) == "1" || pass.charAt(i) == "2" || pass.charAt(i) == "3" || pass.charAt(i) == "4"
                || pass.charAt(i) == "5" || pass.charAt(i) == "6" || pass.charAt(i) == "7" || pass.charAt(i) == "8" || pass.charAt(i) == "9") {
                validarNumerosEnPass++
            }
            else {
                validarMinusculasEnPass++
            }
        }
    }

    if (validarLetrasMayusculas == 0) {
        document.querySelector("#etqMensajeErrorRegistroPersona").innerHTML = "El pass debe tener al menos una Mayuscula";
        return false
    }

    if (validarNumerosEnPass == 0) {
        document.querySelector("#etqMensajeErrorRegistroPersona").innerHTML = "El pass debe tener al menos un Numero";
        return false
    }

    if (validarMinusculasEnPass == 0) {
        document.querySelector("#etqMensajeErrorRegistroPersona").innerHTML = "El pass debe tener al menos una Minuscula";
        return false
    }

    document.querySelector("#etqMensajeErrorRegistroPersona").innerHTML = "Felicidades te registraste correctamente!, vuelve a login para ingresar."
    return true
}


function registrarPersona() {

    // levanto los datos del formulario
    let nombre = document.querySelector("#txtNombreRegistroPersona").value;
    let usuario = document.querySelector("#txtUsuarioRegistroPersona").value;
    usuario = usuario.toLowerCase()
    let pass = document.querySelector("#txtPassRegistroPersona").value;

    // si el usuario no está repetido creo el objeto y lo agrego

    if (!repetido(usuario) && passValido(pass)) {
        // creo el objeto ...  ojo del formulario saco 3 datos, el otro era el id que es el primero
        let unaPersona = new Persona(contadorDePersonas, nombre, usuario, pass);
        // agrego el objeto al array
        arrayPersonas.push(unaPersona)
        //incremento el contador de personas
        contadorDePersonas++;
    }

    // reviso a ver si hice las cosas bien
    console.log(arrayPersonas)
}


// Dejar ingresados los locales 


class Local {
    constructor(unNombre, unUsuario, unPass, unTipoLocal, unCupomax, unaFoto, unEstado, unMaximoTotal) {
        this.id = unId;
        this.nombre = unNombre;
        this.usuario = unUsuario;
        this.pass = unPass;
        this.tipo = unTipoLocal;
        this.cupomax = unCupomax;
        this.foto = unaFoto
        this.estado = unEstado
        this.maximoTotal = unMaximoTotal
        unId++
    }
}
//falta cargar las imagenes 
let arrayLocalesPrecargados = new Array();
let unId = 1;

local1 = new Local("Teatro Solis", "Nicolas123", "Nicolas123", "teatro", 50, "imgs/foto1.jpg", "habilitado", 100)
local2 = new Local("Museo del Carnaval", "Juan123", "Juan123", "museo", 50, "imgs/foto2.jpg", "habilitado", 100)
local3 = new Local("Teatro Opera", "Pedro123", "Pedro123", "teatro", 50, "imgs/foto3.jpg", "habilitado", 100)
local4 = new Local("Tu Refuerso", "Santiago123", "Santiago123", "restaurant", 50, "imgs/foto4.jpg", "habilitado", 100)
local5 = new Local("El Galpon", "Agustin123", "Agustin123", "restaurant", 50, "imgs/foto5.jpg", "habilitado", 100)
local6 = new Local("Cafeteria Cafe", "Sebastian123", "Sebastian123", "restaurant", 50, "imgs/foto6.jpg", "habilitado", 100)
local7 = new Local("La Luz", "Ezequiel123", "Ezequiel123", "museo", 50, "imgs/foto7.jpg", "habilitado", 100)

arrayLocalesPrecargados.push(local1, local2, local3, local4, local5, local6, local7);

console.log(arrayLocalesPrecargados);

//Login Persona 

document.querySelector("#btnIngresarPersona").addEventListener("click", ingresarPersona);

function ingresarPersona() {

    // levanto los datos del formulario
    let usuarioPersonaIngresar = document.querySelector("#txtUsuarioPersonaIngresar").value;
    let passPersonaIngresar = document.querySelector("#txtPassPersonaIngresar").value;

    // si el usuario 
    document.querySelector("#txtUsuarioPersonaIngresar").value="";
    document.querySelector("#txtPassPersonaIngresar").value="";
    document.querySelector("#txtCantReservasSolis").value="";
    document.querySelector("#txtCantReservasMuseoDelCarnaval").value="";
    document.querySelector("#txtCantReservasTeatroOpera").value="";
    document.querySelector("#txtCantReservasTuRefuerso").value="";
    document.querySelector("#txtCantReservasElGalpon").value="";
    document.querySelector("#txtCantReservasLaLuz").value="";
    document.querySelector("#txtNombreRegistroPersona").value="";
    document.querySelector("#txtUsuarioRegistroPersona").value="";
    document.querySelector("#txtCantReservasCafeteriaCafe").value="";
    document.querySelector("#txtPassRegistroPersona").value="";

    if (!usuarioDePersonaRegistrado(usuarioPersonaIngresar, arrayPersonas) && !passCorrectaDePersona(passPersonaIngresar, arrayPersonas)) {
        //que te deje entrar si se cumple
        usuarioPersonaActivo = usuarioPersonaIngresar.toLowerCase();
        mostrarPrincipalPersona()
    }
    
}
function usuarioDePersonaRegistrado(usuario, array) {
    for (i = 0; i < array.length; i++) {
        if ((array[i].usuario).toLowerCase() == usuario.toLowerCase()) {
            return false
        }
    }
    document.querySelector("#etqMensajeErrorInicioPersona").innerHTML = "Nombre de usuario invalido o inexistente"
    document.querySelector("#etqMensageErrorInicioLocal").innerHTML = "Nombre de usuario invalido o inexistente"
    return true
}

function passCorrectaDePersona(pass, array) {
    for (i = 0; i < array.length; i++) {
        if (pass == "") {
            return true
        }
        if (array[i].pass == pass) {
            return false
        }

    }

    document.querySelector("#etqMensajeErrorInicioPersona").innerHTML = "Contraseña Invalida"
    document.querySelector("#etqMensageErrorInicioLocal").innerHTML = "Contraseña Invalida"
    return true
}

// Login Local

let usuarioLocalActivo = ""
let passLocalActivo = ""

document.querySelector("#btnIngresarLocal").addEventListener("click", ingresarLocal);

function ingresarLocal() {

    // levanto los datos del formulario
    let usuarioLocalIngresar = document.querySelector("#txtUsuarioLocalIngresar").value;
    let passLocalIngresar = document.querySelector("#txtPassLocalIngresar").value;
    document.querySelector("#txtUsuarioLocalIngresar").value="";
    document.querySelector("#txtPassLocalIngresar").value="";
    document.querySelector("#txtModificarCupoMacimoLocal").value="";
    document.querySelector("#txtTextoBuscadoReservaLocal").value="";
    // si el usuario 
    if (!usuarioDePersonaRegistrado(usuarioLocalIngresar, arrayLocalesPrecargados) && !passCorrectaDePersona(passLocalIngresar, arrayLocalesPrecargados)) {
        //que te deje entrar si se cumple
        uruarioLocalIng = usuarioLocalIngresar;
        usuarioLocalActivo = usuarioLocalIngresar
        passLocalActivo = passLocalIngresar
        mostrarPrincipalLocal()
    }

}

// Objeto Reservas

class Reserva {
    constructor(unLocal, unUsuario, unCantidadRes, unEstado, unNombreUsuarioLocal, unCalificacion) {
        this.local = unLocal
        this.usuario = unUsuario
        this.cantidadRes = unCantidadRes
        this.estado = unEstado
        this.nombreUsuarioLocal = unNombreUsuarioLocal
        this.calificacion = unCalificacion
    }
}

let arrayReservas = new Array();


let reserva1 = new Reserva("Teatro Solis", "nico", 10, "Pendiente", "nicolas123");
let reserva2 = new Reserva("Museo del Carnaval", "nico", 10, "Pendiente", "juan123");
let reserva3 = new Reserva("Teatro Opera", "nico", 10, "Pendiente", "pedro123");
let reserva4 = new Reserva("Tu Refuerso", "nico", 10, "Pendiente", "santiago123");
let reserva5 = new Reserva("El Galpon", "nico", 10, "Pendiente", "agustin123");
let reserva6 = new Reserva("Cafeteria Cafe", "nico", 10, "Pendiente", "sebastian123");
let reserva7 = new Reserva("La Luz", "nico", 10, "Pendiente", "ezequiel123");

let reserva8 = new Reserva("Teatro Solis", "marcos", 10, "Pendiente", "nicolas123");
let reserva9 = new Reserva("Museo del Carnaval", "marcos", 10, "Pendiente", "juan123");
let reserva10 = new Reserva("Teatro Opera", "marcos", 10, "Pendiente", "pedro123");
let reserva11= new Reserva("Tu Refuerso", "marcos", 10, "Pendiente", "santiago123");
let reserva12= new Reserva("El Galpon", "marcos", 10, "Pendiente", "agustin123");
let reserva13= new Reserva("Cafeteria Cafe", "marcos", 10, "Pendiente", "sebastian123");
let reserva14= new Reserva("La Luz", "marcos", 10, "Pendiente", "ezequiel123");

let reserva15 = new Reserva("Teatro Solis", "facundo", 10, "Pendiente", "nicolas123");
let reserva16 = new Reserva("Museo del Carnaval", "facundo", 10, "Pendiente", "juan123");
let reserva17 = new Reserva("Teatro Opera", "facundo", 10, "Pendiente", "pedro123");
let reserva18= new Reserva("Tu Refuerso", "facundo", 10, "Pendiente", "santiago123");
let reserva19= new Reserva("El Galpon", "facundo", 10, "Pendiente", "agustin123");
let reserva20= new Reserva("Cafeteria Cafe", "facundo", 10, "Pendiente", "sebastian123");
let reserva21= new Reserva("La Luz", "facundo", 10, "Pendiente", "ezequiel123");

let reserva22 = new Reserva("Teatro Solis", "lucia", 10, "Pendiente", "nicolas123");
let reserva23 = new Reserva("Museo del Carnaval", "lucia", 10, "Pendiente", "juan123");
let reserva24 = new Reserva("Teatro Opera", "lucia", 10, "Pendiente", "pedro123");
let reserva25= new Reserva("Tu Refuerso", "lucia", 10, "Pendiente", "santiago123");
let reserva26= new Reserva("El Galpon", "lucia", 10, "Pendiente", "agustin123");
let reserva27= new Reserva("Cafeteria Cafe", "lucia", 10, "Pendiente", "sebastian123");
let reserva28= new Reserva("La Luz", "lucia", 10, "Pendiente", "ezequiel123");

let reserva29 = new Reserva("Teatro Solis", "lucia", 10, "Finalizada", "nicolas123", 4);
let reserva30 = new Reserva("Museo del Carnaval", "lucia", 10, "Finalizada", "juan123", 4);
let reserva31 = new Reserva("Teatro Opera", "lucia", 10, "Finalizada", "pedro123", 4);
let reserva32= new Reserva("Tu Refuerso", "lucia", 10, "Finalizada", "santiago123", 4);
let reserva33= new Reserva("El Galpon", "lucia", 10, "Finalizada", "agustin123", 4);
let reserva34= new Reserva("Cafeteria Cafe", "lucia", 10, "Finalizada", "sebastian123", 4);
let reserva35= new Reserva("La Luz", "lucia", 10, "Finalizada", "ezequiel123", 4);

let reserva36 = new Reserva("Teatro Solis", "maria", 10, "Pendiente", "nicolas123");
let reserva37 = new Reserva("Museo del Carnaval", "maria", 10, "Pendiente", "juan123");
let reserva38 = new Reserva("Teatro Opera", "maria", 10, "Pendiente", "pedro123");
let reserva39= new Reserva("Tu Refuerso", "maria", 10, "Pendiente", "santiago123");
let reserva40= new Reserva("El Galpon", "maria", 10, "Pendiente", "agustin123");
let reserva41= new Reserva("Cafeteria Cafe", "maria", 10, "Pendiente", "sebastian123");
let reserva42= new Reserva("La Luz", "maria", 10, "Pendiente", "ezequiel123");

let reserva43 = new Reserva("Teatro Solis", "maria", 10, "Finalizada", "nicolas123", 4);
let reserva44 = new Reserva("Museo del Carnaval", "maria", 10, "Finalizada", "juan123", 4);
let reserva45 = new Reserva("Teatro Opera", "maria", 10, "Finalizada", "pedro123", 4);
let reserva46= new Reserva("Tu Refuerso", "maria", 10, "Finalizada", "santiago123", 4);
let reserva47= new Reserva("El Galpon", "maria", 10, "Finalizada", "agustin123", 4);
let reserva48= new Reserva("Cafeteria Cafe", "maria", 10, "Finalizada", "sebastian123", 4);
let reserva49= new Reserva("La Luz", "maria", 10, "Finalizada", "ezequiel123", 4);


arrayReservas.push(reserva1, reserva2, reserva3, reserva4, reserva5, reserva6,reserva7, reserva8, reserva9, reserva10, reserva11, reserva12,reserva13, reserva14, reserva15, reserva16, reserva17, reserva18,reserva19, reserva20, reserva21, reserva22, reserva23, reserva24,reserva25, reserva26, reserva27, reserva28, reserva29, reserva30,reserva31, reserva32, reserva33, reserva34, reserva35, reserva36,reserva37, reserva38, reserva39, reserva40, reserva41, reserva42,reserva43, reserva44, reserva45, reserva46, reserva47, reserva48,reserva49)


// Validar Reservas Persona.

// Escucha de Botones Reservas

let usuarioPersonaActivo = ""

document.querySelector("#btnReservarTestroSolis").addEventListener("click", reservarLugarTeatroSolis);


document.querySelector("#btnReservaCafeteriaCafe").addEventListener("click", reservarLugarCafeteriaCafe);
document.querySelector("#btnReservarMuseoDelCarnaval").addEventListener("click", reservarLugarMuseoDelCarnaval);
document.querySelector("#btnReservarTeatroOpera").addEventListener("click", reservarLugarTeatroOpera);
document.querySelector("#btnReservarTuRefuerso").addEventListener("click", reservarLugarTuRefuerso);
document.querySelector("#btnReservarMuseoLaLuz").addEventListener("click", reservarLugarMuseoDeLuz);
document.querySelector("#btnReservaElGalpon").addEventListener("click", reservaLugarElGalpon);

// Funciones de cada local para hacer las reservas

function reservarLugarTeatroSolis() {
    reservarLugar("Teatro Solis", "#txtCantReservasSolis", "#etqMensajeErrorReservaSolis", "nicolas123")
}

function reservarLugarMuseoDelCarnaval() {
    reservarLugar("Museo del Carnaval", "#txtCantReservasMuseoDelCarnaval", "#etqMensajeErrorReservaMuseoDelCarnaval", "juan123")
}

function reservarLugarTeatroOpera() {
    reservarLugar("Teatro Opera", "#txtCantReservasTeatroOpera", "#etqMensajeErrorReservaTeatroOpera", "pedro123")
}

function reservarLugarTuRefuerso() {
    reservarLugar("Tu Refuerso", "#txtCantReservasTuRefuerso", "#etqMensajeErrorReservaTuRefuerso", "santiago123")
}

function reservarLugarMuseoDeLuz() {
    reservarLugar("La Luz", "#txtCantReservasLaLuz", "#etqMensajeErrorReservaLaLuz", "ezequiel123")
}

function reservarLugarCafeteriaCafe() {
    reservarLugar("Cafeteria Cafe", "#txtCantReservasCafeteriaCafe", "#etqMensajeErrorReservaCafeteriaCafe", "sebastian123")
}

function reservaLugarElGalpon() {
    reservarLugar("El Galpon", "#txtCantReservasElGalpon", "#etqMensajeErrorReservaElGalpon", "agustin123")
}

// Funcion que genera la reserva
function reservarLugar(nombre, texto, etqError, usuarioDelLocal) {

    let cantidadReservas = 0;

    if (document.querySelector(texto).value == "" || document.querySelector(texto).value == "0") {
        document.querySelector(etqError).innerHTML = "Ingrese numero Valido"
    }
    else {
        cantidadReservas = parseInt(document.querySelector(texto).value);
        if (!validarReservas(cantidadReservas, nombre, usuarioPersonaActivo, etqError)) {
            // creo el objeto 
            let reserva = new Reserva(nombre, usuarioPersonaActivo, cantidadReservas, "Pendiente", usuarioDelLocal);
            // agrego el objeto al array
            arrayReservas.push(reserva)
        }
    }
}


// Funcion qpara validar las reservas que se estan cargando, de ser correcto da False, sino se puede cargar da True.
function validarReservas(cantidadReservas, localDeReserba, usuarioPersonaActivo, etqError) {
    for (i = 0; i < arrayLocalesPrecargados.length; i++) {
        if (arrayLocalesPrecargados[i].nombre == localDeReserba) {

            if (arrayLocalesPrecargados[i].estado == "habilitado") {

                if ((arrayLocalesPrecargados[i].cupomax - cantidadReservas) >= 0) {

                    for (x = 0; x < arrayReservas.length; x++) {

                        if (arrayReservas[x].usuario == usuarioPersonaActivo && arrayReservas[x].local == localDeReserba && arrayReservas[x].estado == "Pendiente") {
                            document.querySelector(etqError).innerHTML = "Ya hay una reserva Pendiente"
                            return true
                        }
                    }
                    document.querySelector(etqError).innerHTML = "Reserva Exitosa"

                    arrayLocalesPrecargados[i].cupomax = arrayLocalesPrecargados[i].cupomax - cantidadReservas

                    return false

                } else {
                    document.querySelector(etqError).innerHTML = "Local lleno"
                    return true
                }
            } else {
                document.querySelector(etqError).innerHTML = "El local está deshabilitado momentáneamente"
                return true
            }
        }
    }
}


// Funcion modifica informacion de local, segun usuarioo que ingrese que info muestra en pantalla, si un local o otro.


document.querySelector("#btnModificarCupoMaximoLocal").addEventListener("click", modificarCupoMaximoLocal);
document.querySelector("#btnCambiarEstadoLocal").addEventListener("click", modificarEstadoLocal)

let uruarioLocalIng = ""
let posicionDeLocalIngresado = ""
let totalReservasPendientes = 0

function mostrarDetalleReservaUsuarioLocal() {

    for (i = 0; i < arrayLocalesPrecargados.length; i++) {
        if (arrayLocalesPrecargados[i].usuario.toLowerCase() == uruarioLocalIng.toLowerCase()) {
            document.querySelector("#etqNombreLocalInfoLocal").innerHTML = arrayLocalesPrecargados[i].nombre;

            //modificarCupoMaximoLocal (i)
            posicionDeLocalIngresado = i
            document.querySelector("#etqEstadoActualLocal").innerHTML = arrayLocalesPrecargados[posicionDeLocalIngresado].estado
            document.querySelector("#etqCupoMaximoActualLocal").innerHTML = arrayLocalesPrecargados[posicionDeLocalIngresado].cupomax
            document.querySelector("#etqMEnsajeErrorCambioCupoMaxLocal").innerHTML = ""
            document.querySelector("#etqMEnsajeErrorCambioEstado").innerHTML = "Mensaje Cambio Estado"
        }
    }

}

function modificarEstadoLocal() {

    let estadoActualLocal = document.querySelector("#txtOpcionesModificacionEstadoLocal").value
    estadoActualLocal = estadoActualLocal.toLowerCase()

    for (let x = 0; x < arrayReservas.length; x++) {
        if (arrayReservas[x].local == arrayLocalesPrecargados[posicionDeLocalIngresado].nombre && arrayReservas[x].estado == "Pendiente") {
            totalReservasPendientes = totalReservasPendientes + arrayReservas[x].cantidadRes
        }
    }

    if (totalReservasPendientes == 0) {

        if (estadoActualLocal == "habilitado") {
            arrayLocalesPrecargados[posicionDeLocalIngresado].estado = "habilitado"
            document.querySelector("#etqEstadoActualLocal").innerHTML = "Habilitado"
            document.querySelector("#etqMEnsajeErrorCambioEstado").innerHTML = "Cambio realizado"
        }
        else {
            arrayLocalesPrecargados[posicionDeLocalIngresado].estado = "deshabilitado"
            document.querySelector("#etqEstadoActualLocal").innerHTML = "Deshabilitado"
            document.querySelector("#etqMEnsajeErrorCambioEstado").innerHTML = "Cambio realizado"
        }
    }
    else {
        document.querySelector("#etqMEnsajeErrorCambioEstado").innerHTML = "El local tiene reservas pendientes"
        totalReservasPendientes = 0
    }
}
function modificarCupoMaximoLocal() {

    let nuevoCupoIng = parseInt(document.querySelector("#txtModificarCupoMacimoLocal").value)

    for (let x = 0; x < arrayReservas.length; x++) {
        if (arrayReservas[x].local == arrayLocalesPrecargados[posicionDeLocalIngresado].nombre && arrayReservas[x].estado == "Pendiente") {
            totalReservasPendientes = totalReservasPendientes + arrayReservas[x].cantidadRes
        }
    }

    if (totalReservasPendientes == 0 && nuevoCupoIng > 0) {
        arrayLocalesPrecargados[posicionDeLocalIngresado].cupomax = nuevoCupoIng
        arrayLocalesPrecargados[posicionDeLocalIngresado].maximoTotal = nuevoCupoIng
        document.querySelector("#etqCupoMaximoActualLocal").innerHTML = nuevoCupoIng
        document.querySelector("#etqMEnsajeErrorCambioCupoMaxLocal").innerHTML = "Cambio de cupos realizado"

    }
    else if (nuevoCupoIng <= 0) {
        document.querySelector("#etqMEnsajeErrorCambioCupoMaxLocal").innerHTML = "Ingrese Cupo Mayor a 0"
    }
    else {
        document.querySelector("#etqMEnsajeErrorCambioCupoMaxLocal").innerHTML = "El local tiene reservas pendientes"
        totalReservasPendientes = 0

    }
}


// Mostrar Reservas Pendietes y Finalizadas Usuario Local

document.querySelector("#btnMostrarReservasPendientesLocal").addEventListener("click", mostrarReservasPendientesLocal);


function mostrarReservasPendientesLocal() {

    let tablaPendientes = "<table border=0>"

    tablaPendientes += `<tr>
                            <td>Usuario</td>
                            <td>Nombre Local</td>
                            <td>Lugares Reservados</td>
                            <td>Estado Reserva</td>`

    console.log(arrayReservas)

    for (let x = 0; x < arrayReservas.length; x++) {
        if (arrayReservas[x].estado == "Pendiente" && arrayReservas[x].nombreUsuarioLocal.toLowerCase() == usuarioLocalActivo.toLowerCase()) {
            tablaPendientes += `<tr>
                                <td>${arrayReservas[x].usuario}</td>
                                <td>${arrayReservas[x].local}</td>
                                <td>${arrayReservas[x].cantidadRes}</td>
                                <td>${arrayReservas[x].estado}</td>
                                <td><button id="btnCancelar${arrayReservas[x].usuario}" name="${arrayReservas.estado}" onclick="finalizarReservasLocal(${x})">Finalizar Reserva</button></td>
                                </tr>`
        }
    }

    for (let z = 0; z < arrayReservas.length; z++) {
        if (arrayReservas[z].estado == "Finalizada" && arrayReservas[z].nombreUsuarioLocal.toLowerCase() == usuarioLocalActivo.toLowerCase()) {
            tablaPendientes += `<tr>
                                <td>${arrayReservas[z].usuario}</td>
                                <td>${arrayReservas[z].local}</td>
                                <td>${arrayReservas[z].cantidadRes}</td>
                                <td>${arrayReservas[z].estado}</td>
                                </tr>`
        }
    }

    tablaPendientes += `</table>`

    document.querySelector("#tblTablaReservasPendientesLocal").innerHTML = tablaPendientes

}

// Funcion Cancelar Reservas Local

function finalizarReservasLocal(reservaCancelada) {

    if (arrayReservas[reservaCancelada].estado == "Pendiente") {
        arrayReservas[reservaCancelada].estado = "Finalizada"

        for (let i = 0; i < arrayLocalesPrecargados.length; i++) {

            if (arrayLocalesPrecargados[i].usuario.toLowerCase() == usuarioLocalActivo.toLowerCase()) {
                arrayLocalesPrecargados[i].cupomax = arrayLocalesPrecargados[i].cupomax + arrayReservas[reservaCancelada].cantidadRes
            }

        }
    }

    mostrarReservasPendientesLocal()

}

// Mostrar Reservas Pendientes Usuario

function mostrarReservasPendientesUsuario() {

    let tablaPendientes = "<table border=0>"

    tablaPendientes += `<tr>
                            <td>Usuario</td>
                            <td>Nombre Local</td>
                            <td>Lugares Reservados</td>
                            <td>Estado Reserva</td>`

    console.log(arrayReservas)

    for (let x = 0; x < arrayReservas.length; x++) {
        if (arrayReservas[x].estado == "Pendiente" && arrayReservas[x].usuario.toLowerCase() == usuarioPersonaActivo.toLowerCase()) {
            tablaPendientes += `<tr>
                                <td>${arrayReservas[x].usuario}</td>
                                <td>${arrayReservas[x].local}</td>
                                <td>${arrayReservas[x].cantidadRes}</td>
                                <td>${arrayReservas[x].estado}</td>
                                <td><button id="btnCancelar${arrayReservas[x].usuario}" name="${arrayReservas.estado}" onclick="finalizarReservasUsuario(${x})">Cancelar Reserva</button></td>
                                </tr>`
        }
    }

    tablaPendientes += `</table>`

    document.querySelector("#tablaRservasPendientesUsuario").innerHTML = tablaPendientes


}

// Funcion Cancelar Reservas usuario

function finalizarReservasUsuario(reservaCancelada) {

    if (arrayReservas[reservaCancelada].estado == "Pendiente") {
        arrayReservas[reservaCancelada].estado = "Cancelada"

        for (let i = 0; i < arrayLocalesPrecargados.length; i++) {

            if (arrayLocalesPrecargados[i].nombre == arrayReservas[reservaCancelada].local) {
                arrayLocalesPrecargados[i].cupomax = arrayLocalesPrecargados[i].cupomax + arrayReservas[reservaCancelada].cantidadRes
            }

        }
    }


    mostrarReservasPendientesUsuario()
}

// Calificar Reservas Finalizadas Usuaio

function calificarResvasFinalizadasUsuario() {

    let tablaPendientes = "<table border=0>"

    tablaPendientes += `<tr>
                            <td>Usuario</td>
                            <td>Nombre Local</td>
                            <td>Lugares Reservados</td>
                            <td>Estado Reserva</td>`

    console.log(arrayReservas)

    for (let x = 0; x < arrayReservas.length; x++) {
        if (arrayReservas[x].estado == "Finalizada" && arrayReservas[x].usuario.toLowerCase() == usuarioPersonaActivo.toLowerCase() && arrayReservas[x].calificacion == undefined) {
            tablaPendientes += `<tr>
                                <td>${arrayReservas[x].usuario}</td>
                                <td>${arrayReservas[x].local}</td>
                                <td>${arrayReservas[x].cantidadRes}</td>
                                <td>${arrayReservas[x].estado}</td>
                                <td><select id="txtCalificacionPosibles${x}">
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                </select></td>
                                <td><button id="btnCalificacionPosibles${x}" name="arrayReservas[${x}].usuario" onclick="calidifcarResevasUsuario(${x})">Calificar Reserva</button></td>
                                </tr>`
        }
    }

    tablaPendientes += `</table>`

    document.querySelector("#tablaCalificarReservasUsuario").innerHTML = tablaPendientes

}

// Funcion Calificar Reservas Usuario

function calidifcarResevasUsuario(x) {

    let numIng = parseInt(document.querySelector(`#txtCalificacionPosibles${x}`).value)


    arrayReservas[x].calificacion = numIng


    calificarResvasFinalizadasUsuario()

}




// Buscador Reservas Pendientes Local

document.querySelector("#btnBuscarReservasPendientesLocal").addEventListener("click", buscarReservasPendientesLocal);

function buscarReservasPendientesLocal() {

    document.querySelector("#tblTablaReservasPendientesLocal").innerHTML = ""

    let bandera=0;

    let textoIng = document.querySelector("#txtTextoBuscadoReservaLocal").value;

    tablaPendientes = "<table border=1>"

    tablaPendientes += `<tr>
                            <td>Usuario</td>
                            <td>Nombre Local</td>
                            <td>Lugares Reservados</td>
                            <td>Estado Reserva</td>`

    for (let i = 0; i < arrayReservas.length; i++) {
        if (arrayReservas[i].usuario.indexOf(textoIng) >= 0) {

            if (arrayReservas[i].estado == "Pendiente" && arrayReservas[i].nombreUsuarioLocal.toLowerCase() == usuarioLocalActivo.toLowerCase()) {
                tablaPendientes += `<tr>
                            <td>${arrayReservas[i].usuario}</td>
                            <td>${arrayReservas[i].local}</td>
                            <td>${arrayReservas[i].cantidadRes}</td>
                            <td>${arrayReservas[i].estado}</td>
                            <td><button id="btnCancelar${arrayReservas[i].usuario}" name="${arrayReservas.estado}" onclick="finalizarReservasLocal(${i})">Finalizar Reserva</button></td>
                            </tr>`
                            bandera++
            }
        }
    }
    for (let i = 0; i < arrayReservas.length; i++) {
        if (arrayReservas[i].usuario.indexOf(textoIng) >= 0) {

            if (arrayReservas[i].estado == "Finalizada" && arrayReservas[i].nombreUsuarioLocal.toLowerCase() == usuarioLocalActivo.toLowerCase()) {
                tablaPendientes += `<tr>
                            <td>${arrayReservas[i].usuario}</td>
                            <td>${arrayReservas[i].local}</td>
                            <td>${arrayReservas[i].cantidadRes}</td>
                            <td>${arrayReservas[i].estado}</td>
                            </tr>`
            }
        }
    }

    tablaPendientes += `</table>`
    document.querySelector("#tblTablaReservasPendientesLocal").innerHTML = tablaPendientes

if(bandera==0){
    alert("No hay reservas en estado Pendiente")


}
}


// Estadisticas Usuario Local

function mostrarEstadisticasLocal() {

    let resPendiente = 0
    let resFinalizadas = 0
    let promCalificacion = 0
    let contador = 0
    let cupoMaximo = 0
    cupomaximo = cupoMaximo + (resPendiente + resFinalizadas)
    let ocupacion = (resPendiente * 100) / cupoMaximo

    document.querySelector("#etqFotoLocalEstadisticas").innerHTML= ""

    for (let i = 0; i < arrayReservas.length; i++) {
        
        if (arrayReservas[i].nombreUsuarioLocal.toLowerCase() == usuarioLocalActivo.toLowerCase()) {
            
            if (arrayReservas[i].estado == "Pendiente") {
                resPendiente = resPendiente + parseInt(arrayReservas[i].cantidadRes)
            }
            if (arrayReservas[i].estado == "Finalizada") {
                resFinalizadas = resFinalizadas + parseInt(arrayReservas[i].cantidadRes)
            }
            if (arrayReservas[i].calificacion != undefined) {
                contador++
                promCalificacion += arrayReservas[i].calificacion

            }

            // mostrar nombre del local 
            document.querySelector("#etqNombreLocalEstadisticasMostradas").innerHTML= arrayReservas[i].local

        }
        
    }

    // Mostrar foto del local de estadisticas
    for (let x=0; x < arrayLocalesPrecargados.length; x++){

        let image = document.createElement('img')
        image.src  = arrayLocalesPrecargados[x].foto
        image.height = 100

        if (arrayLocalesPrecargados[x].usuario.toLowerCase() == usuarioLocalActivo.toLowerCase()){
            document.querySelector("#etqFotoLocalEstadisticas").appendChild(image)  
        }
        
    }

    for (let x = 0; x < arrayLocalesPrecargados.length; x++) {
        if (arrayLocalesPrecargados[x].usuario.toLowerCase() == usuarioLocalActivo.toLowerCase()) {
            cupoMaximo = parseInt(arrayLocalesPrecargados[x].maximoTotal)
           
        }
    }

    // % ocupacion
    document.querySelector("#etqPorcentajeOcupacionLocal").innerHTML = resPendiente * 100 / cupoMaximo

    // Cupo Maximo
    document.querySelector("#etqCupoMaximoLocal").innerHTML = cupoMaximo

    // Promedio Calificaion
    document.querySelector("#etqPromedioCalificacionesLocal").innerHTML = (promCalificacion / contador).toFixed(1)

    // Res Pendientes
    document.querySelector("#etqReservasPendientesLocal").innerHTML = resPendiente

    // Res finalizadas
    document.querySelector("#etqReservasFinalizadasLocal").innerHTML = resFinalizadas

    // Res Actuales/Totales
    document.querySelector("#etqReservasActuales").innerHTML = resPendiente


}

//Estadisticas Persona

document.querySelector("#btnPantallaEstadisticasPersona").addEventListener("click", buscarEstadisticasPersona);

function buscarEstadisticasPersona() {

    document.querySelector("#tablaEstadisticasUsuario").innerHTML = ""

    tablaEstadisticasPersona = "<table border=1>"

    tablaEstadisticasPersona += `<tr>
                            <td>Locales</td>
                            <td>Cantidad</td>
                            <td>Total Reservas</td>
                            <td>%Reserva</td>`

    for (let i = 0; i < arrayLocalesPrecargados.length; i++) {

        let cantidadReservasEstadisticasPersona = 0;
        let confirmacion = 0;
        let reservasTotalesLocal = 0;

        for (let x = 0; x < arrayReservas.length; x++) {

            if (arrayLocalesPrecargados[i].nombre == arrayReservas[x].local) {

                reservasTotalesLocal++

                if (arrayReservas[x].usuario.toLowerCase() == usuarioPersonaActivo.toLowerCase() && arrayLocalesPrecargados[i].nombre == arrayReservas[x].local) {

                    cantidadReservasEstadisticasPersona++

                    if (arrayReservas[x].estado == "Finalizada") {
                        confirmacion++
                    }
                }

            }
        }


        if (confirmacion > 0) {
            tablaEstadisticasPersona += `<tr>
                <td>${arrayLocalesPrecargados[i].nombre}</td>
                <td>${cantidadReservasEstadisticasPersona}</td>
                <td>${reservasTotalesLocal}</td>
                <td>%${((100 * cantidadReservasEstadisticasPersona) / reservasTotalesLocal).toFixed(1)}</td>
                </tr>`

            confirmacion = 0;
            localFavorito()

        }


    }

    tablaEstadisticasPersona += `</table>`
    document.querySelector("#tablaEstadisticasUsuario").innerHTML = tablaEstadisticasPersona


}

class Favorito {

    constructor(unLocal, unReservas) {

        this.local = unLocal
        this.cantidadReservas = unReservas

    }
}
let cantidadResFav = new Array()

function localFavorito() {

    document.querySelector("#etqLocalFavorito").innerHTML = "Locales mas reservados por el usuario: "

    for (let i = 0; i < arrayLocalesPrecargados.length; i++) {

        let bandera = 0;

        for (let x = 0; x < arrayReservas.length; x++) {

            if (arrayReservas[x].usuario.toLowerCase() == usuarioPersonaActivo.toLowerCase() && arrayLocalesPrecargados[i].nombre == arrayReservas[x].local) {

                personaTest = new Favorito(arrayLocalesPrecargados[i].nombre, 1)

                for (let z = 0; z < cantidadResFav.length; z++) {

                    if (cantidadResFav[z].local == arrayLocalesPrecargados[i].nombre) {

                        cantidadResFav[z].cantidadReservas++
                        bandera++
                    }

                }
                if (bandera == 0) {

                    cantidadResFav.push(personaTest)

                }

            }
        }


    }
    let mayor = 0;
    for (let max of cantidadResFav) {

        if (max.cantidadReservas > mayor) {
            mayor = max.cantidadReservas
        }

    }


    for (let fav of cantidadResFav) {
        if (fav.cantidadReservas == mayor) {

            document.querySelector("#etqLocalFavorito").innerHTML += `<br></br>` + fav.local
        }
        fav.cantidadReservas = 0
    }

}