
/*
Cosas por hacer:

- conectar credencial

*/

//Variables 

let mision_uno = false;

let num_adivinanza1 = "";
let num_adivinanza2 = "";
let numero_valido = "";
let adivinanza1 = "";
let adivinanza2 = "";
let adivinanza3 = "";
let adivinanza4 = "";

let personaje_principal = "";
let nombre_jugador = "";
let apellido_jugador = "";
let anio_nac = "";
let validar = false;
let credencial = "";

let explotar = 0;
let desactivado = "";

let boton = "";
let desactivar_botón = "";

let cables = ""
let desactivar_cables = "";

let desactivar_numeros = "";
let combinacion = [];
let numeros_combinacion = [];
let respuesta = [];
let a = 0;

let lineas_colores = "";
let desactivar_lineas = "";

let combinacion_numeros = "";
let desactivar_colores = "";

//Objetos

class Persona{

    constructor(nombre, apellido, anio){

        this.nombre = nombre;
        this.apellido = apellido;
        this.anio = anio;

    }
}

class Letras{

    constructor(numero, letra){

        this.numero = numero;
        this.letra = letra;
    }
}

let uno = new Letras(0, "A")
let dos = new Letras(1, "B")
let tres = new Letras(2, "C")
let cuatro = new Letras(3, "D")
let cinco = new Letras(4, "E")
let seis = new Letras(5, "F")
let siete = new Letras(6, "G")
let ocho = new Letras(7, "H")
const letras = [uno, dos, tres, cuatro, cinco, seis, siete, ocho];



//Introducción del juego

iniciar();

function iniciar (){

    do{
        confirm("Empezar")

    }while(confirm == false);

    introduccion();

}

function introduccion(){

    console.log("Es una fría y brumosa mañana...")

    setTimeout(() => { console.log("Hoy en la mañana llegué a mi nuevo lugar de trabajo, en el cual debo desempeñar labores de tecnología. Pero este lugar es un poco confuso y extraño, y de cierta forma aterrador...")}, 1000);

    setTimeout(() => { console.log("Escuchas algo acercarse, es un auto a control remoto con una pantalla..."); }, 8500);

    setTimeout(() => { console.log("Bienvenido a tu primer día en Aumented reality, Nanotechnology and Arcade, 'A.N.A.' como verás tus compañeros ya comenzaron sus labores, te dejaré tu primera misión.."); }, 11500);

    setTimeout(() => { console.log("¡Espera! -exclamas."); }, 18000);

    setTimeout(() => { console.log("Pero ya se había ido..."); }, 19000);

    setTimeout(() => { console.log("Miles de preguntas abundan en tu cabeza, pero no hay tiempo que perder, debes comenzar... "); }, 20000);

    setTimeout(() =>{ 
        
        confirm("VER MISION");

        mision_uno = true;

        mision1();

    }, 22000)
}



//Mision 1
function mision1(){

    do{

        nombre_jugador = prompt("Ingrese su nombre:");

    }while (nombre_jugador == "");

    
    console.log("Bienvenido a 'A.N.A.'", nombre_jugador);
        
    console.log("La primera parte consiste en resolver algunas adivinanzas.");

    console.log("¿Adivinanzas? ¿Qué clase de trabajo es este? -Piensas");

    setTimeout(adivinanza_r1, 6000);

}

function adivinanza_r1(){

    do {

        num_adivinanza1 = parseInt(prompt("Primera ronda de adivinanzas, escoge un numero del 1 al 4"));
            
        if (num_adivinanza1 >= 1 && num_adivinanza1 <= 4){

            numero_valido = true;
        }

    }while(numero_valido != true);

    if (num_adivinanza1 == 1){

        do{

            adivinanza1 = prompt("Tengo agujas y no se coser, tengo números y no se leer: _ _ _ _ _  (solo minúsculas)");

            if (adivinanza1 != "reloj"){
                
                console.log("Incorrecto")
            }

        }while (adivinanza1 != "reloj")

    }else if (num_adivinanza1 == 2){

        do{

            adivinanza2 = prompt("Es venta y no se vende, es ana pero no es gente: _ _ _ _ _ _ _  (solo minúsculas)");

            if (adivinanza2 != "ventana"){
                
                console.log("Incorrecto")
            }

        }while (adivinanza2 != "ventana")

    }else if (num_adivinanza1 == 3){

        do{

            adivinanza3 = prompt("¿Qué se encuentra entre playa y mar?: _ (solo minúsculas)");

            if (adivinanza3 != "y"){
                
                console.log("Incorrecto")
            }

        }while (adivinanza3 != "y")

    }else if (num_adivinanza1 == 4){

        do{

            adivinanza4 = prompt("A un caballo se puede parecer pero por sus rayas negras sabrás lo que es: _ _ _ _ _ (solo minúsculas)");
            
            if (adivinanza4 != "zebra"){

                console.log("Incorrecto")
            }

        }while (adivinanza4 != "zebra")

    }

    alert("Correcto!");

    adivinanza_r2();

}

function adivinanza_r2(){

    numero_valido = false;

    do {

        num_adivinanza2 = parseInt(prompt("Segunda ronda de adivinanzas, escoge un numero del 1 al 4 (distinto al anterior)"));
            
        if (num_adivinanza2 >= 1 && num_adivinanza2 <= 4){

            if (num_adivinanza1 != num_adivinanza2){

                numero_valido = true;

            } else{

                console.log("Debes escoger un numero distinto al de la primera adivinanza");
            }
                
        }

    }while(numero_valido != true);

    if (num_adivinanza2 == 1){

        do{

            adivinanza1 = prompt("Tengo agujas y no se coser, tengo números y no se leer: _ _ _ _ _");

            if (adivinanza1 != "reloj"){

                console.log("Incorrecto")
            }

        }while (adivinanza1 != "reloj")

    }else if (num_adivinanza2 == 2){

        do{

            adivinanza2 = prompt("Es venta y no se vende, es ana pero no es gente: _ _ _ _ _ _ _  (solo minúsculas)");

            if (adivinanza2 != "ventana"){

                console.log("Incorrecto")
            }

        }while (adivinanza2 != "ventana")

    }else if (num_adivinanza1 != 3 && num_adivinanza2 == 3){

        do{

            adivinanza3 = prompt("¿Qué se encuentra entre playa y mar?: _ (solo minúsculas)");

            if (adivinanza3 != "y"){

                console.log("Incorrecto")
            }

        }while (adivinanza3 != "y")

    }else if (num_adivinanza1 != 4 && num_adivinanza2 == 4){

        do{

            adivinanza4 = prompt("A un caballo se puede parecer pero por sus rayas negras sabrás lo que es: _ _ _ _ _ (solo minúsculas)");

            if (adivinanza4 != "zebra"){

                console.log("Incorrecto")
            }

        }while (adivinanza4 != "zebra")
        
    } 

    alert("¡Correcto! Todo esto es parte de un calentamiento mental, me encanta dar la bienvenida así. Ahora necesito que vayas al edificio principal para crear tu ficha de trabajador.");

    confirm("Ir a edificio principal");
    mision2();

}



//Mision 2

function mision2(){

    console.log("Debes crear tu perfil de empresa");

    do{
        alert("Crear perfil de empresa")
        nombre_jugador = prompt("Ingrese su nombre: ");
        apellido_jugador = prompt("Ingrese su apellido: ");
        anio_nac = prompt("Ingrese su año de nacimiento:");
        validar = prompt("¿Confirma creación de tarjeta de empresa? (si o no, en minúsculas)");
        

    }while (validar != "si")

    personaje_principal = new Persona(nombre_jugador, apellido_jugador, anio_nac);

    credencial = [-1,nombre_jugador.slice(0,3), apellido_jugador.slice(0,3), anio_nac.slice(2,4)];

    credencial.reverse()

    console.log("¡Listo! su credencial es: ", credencial.join(""), ", la cual es de nivel 1.");
    
    console.log("Ahora debes ir a tu lugar de trabajo, al final del pasillo a la izquierda.");

    alert("Ir a lugar de trabajo");

    setTimeout(() => habitacion_principal() , 1000);

}

function habitacion_principal(){

    console.log("Entras en una habitación extraña con otras 7 puertas.")

    setTimeout(() => {console.log("¿Qué es este lugar? -piensas") }, 2000);

    setTimeout(() => {console.log("De nuevo se acerca el auto a control remoto") }, 3000);

    setTimeout(() => {console.log("Ahora podrás empezar tus labores en este trabajo, deberás completar las misiones correspondientes en cada una de las habitaciones.") }, 4000);

    setTimeout(() => {console.log("Empiezo a acostumbrarme a los misterios -piensas. Mientras el auto a control remoto se va por una puertita") }, 9000);

    setTimeout(() => alert("Entrar en Habitación 1"), 10000);

    setTimeout(() => habitacion1() , 10500);
}



//Habitación 1

function habitacion1(){

    console.clear();

    console.log("Entras a la primera habitación, y de repente algo te ciega.");

    setTimeout(() => {console.log("Al volver a abrir los ojos, ves que hay una mesa con algo encima, tiene unas luces y un contador... ¿¡ES UNA BOMBA!? -exclamas. Rapidamente te pones manos a la obra para desactivarla con ayuda del manual que está justo al lado."); }, 3000);

    setTimeout(() => alert("Comenzar"), 12000);

    setTimeout(() => empezar(), 14000);
}

//Manual
function empezar(){

    console.clear();

    console.log("Manual ")
    console.log("MODULO 1:")
    console.log("Verás un botón con un color:")
    console.log("- Debe escribir la cantidad de veces que se debe presionar (ej: 3)")
    console.log("a) Si el botón es rojo debe presionar 3 veces")
    console.log("b) Si el botón es azul debe presionar 4 veces")
    console.log("c) Si el botón es verde debe presionar 5 veces")
    console.log("d) Si el botón es amarillo debe presionar 6 veces")
    console.log("")
    console.log("MODULO 2: ")
    console.log("Saldrán cables de distintos colores, debe revisar cual de los enunciados coincide con los cables que ve")
    console.log("- Debe escribir el color del cable a cortar (debes escribir en minúsculas. Ej: rojo)")
    console.log("a) Si hay un cable amarillo corta el rojo")
    console.log("b) Si NO hay un cable azul corta el verde")
    console.log("c) Si hay un cable morado corta el azul")
    console.log("d) Si NO hay un cable blanco corta el rosa")
    console.log("")
    console.log("MODULO 3: ")
    console.log("Le saldrá una secuencia de 4 números (ej: 4375)")
    console.log("1) Debe ordenarlo de menor a mayor (ej: 3457")
    console.log("2) Compara los números  escribe la letra correspondiente (debe escribir las letras en mayúscula y sin espacios. Ej: DEFH")
    console.log("A = 0 | B = 1 | C = 2 | D = 3")
    console.log("E = 4 | F = 5 | G = 6 | H = 7")
    console.log("")
    console.log("MODULO 4: ")
    console.log("Aparecerán 3 lineas de colores")
    console.log("a) Si la primera es de color rojo, escribe 25500")
    console.log("b) Si la primera es de color azul, escribe 00255")
    console.log("c) Si la primera es de color verde, escribe 02550")
    console.log("")
    console.log("MODULO 5: ")
    console.log("Verás 4 pares de números (Ej: 43 76 55 66)")
    console.log("1) Debes comparar con los colores")
    console.log("2) Y debes escribir los colores correspondientes (en minúsculas y con espacios. Ej: rojo naranja verde morado)")
    console.log("rojo = 43 | amarillo = 86 | azul = 44")
    console.log("naranja = 76 | verde = 55 | morado = 66")
    console.log("")

    empezar_boton();
    
}

function empezar_boton(){

    boton = Math.floor(Math.random() * 5);

    if (boton == 1){

        boton = "rojo";
        desactivar_botón = "3";

    }else if (boton == 2){

        boton = "azul";
        desactivar_botón = "4";

    }else if (boton == 3){

        boton = "verde";
        desactivar_botón = "5";

    }else{

        boton = "amarillo";
        desactivar_botón = "6";

    }

      
    
    for(let i = 0; i < 3; i++){

        desactivado = prompt("El botón es de color: "+ boton + ". Cantidad de veces que pulsará el botón:");

        if (desactivar_botón == desactivado){

            alert("Botón desactivado");
            empezar_cables();
            break

        }else{
            alert("Error")
            explotar = explotar + 1;
            if (explotar >= 3){

                alert("Ha explotado");
                habitacion1();
                break
            }
        }
    }    
    
}

function empezar_cables(){

    cables = Math.floor(Math.random() * 5);

    if (cables == 1){

        cables = ["amarillo", "rojo", "azul", "blanco"];
        desactivar_cables = "rojo";

    }else if (cables == 2){

        cables = ["rojo", "verde", "rosa", "blanco"];
        desactivar_cables = "verde";

    }else if (cables == 3){

        cables = ["azul", "morado", "rojo", "blanco"];
        desactivar_cables = "azul";

    } else {

        cables = ["rojo", "azul", "verde", "rosa"];
        desactivar_cables = "rosa";

    }


    for(let i = 0; i < 3; i++){

        desactivado = prompt("Los cables que tiene son: "+ cables + ". Cable que cortará:");

        if (desactivar_cables == desactivado){

            alert("Cables desactivados");
            empezar_numeros();
            break

        }else{
            alert("Error")
            explotar = explotar + 1;
            if (explotar >= 3){

                alert("Ha explotado");
                habitacion1();
                break
            }
        }

    }  

}

function empezar_numeros(){

    for (let i = 0 ; i < 4 ; i++){

        let letra_random = Math.floor(Math.random() * 8);
    
        combinacion.splice(a, a + 1, letra_random);
        numeros_combinacion.push(letra_random)
        a++
    }

    for(let i = 0 ; i < 4 ; i++){

        if (combinacion.includes(0)){

            respuesta.push(uno.letra)

            combinacion.sort()

            combinacion.shift()

        }else if (combinacion.includes(1)){

            respuesta.push(dos.letra)
            
            combinacion.sort()

            combinacion.shift()

        }else if (combinacion.includes(2)){

            respuesta.push(tres.letra)
            
            combinacion.sort()

            combinacion.shift()

        }else if (combinacion.includes(3)){

            respuesta.push(cuatro.letra)
            
            combinacion.sort()

            combinacion.shift()

        }else if (combinacion.includes(4)){

            respuesta.push(cinco.letra)
            
            combinacion.sort()

            combinacion.shift()

        }else if (combinacion.includes(5)){

            respuesta.push(seis.letra)
            
            combinacion.sort()

            combinacion.shift()

        }else if (combinacion.includes(6)){

            respuesta.push(siete.letra)
            
            combinacion.sort()

            combinacion.shift()

        }else if (combinacion.includes(7)){

            respuesta.push(ocho.letra)
            
            combinacion.sort()

            combinacion.shift()

        }
    }

    for(let i = 0; i < 3; i++){

        desactivar_numeros = prompt("La combinación de numeros es: "+  numeros_combinacion.join("") + " Su respuesta es: ")

        if (desactivar_numeros == respuesta.join("")){

            alert("Módulo numeros y letras desactivado");
            empezar_lineas();
            break

        }else{
            alert("Error")
            explotar = explotar + 1;
            if (explotar >= 3){

                alert("Ha explotado");
                habitacion1();
                break
            }
        }

    }  
    
}

function empezar_lineas(){

    lineas_colores = Math.floor(Math.random() * 3);

    if (lineas_colores == 0){

        lineas_colores = "rojo, verde y azul";
        desactivar_lineas = "25500";

    } else if (lineas_colores == 1){

        lineas_colores = "azul, rojo y verde ";
        desactivar_lineas = "00255";

    }else if (lineas_colores == 2){

        lineas_colores = "verde, azul  rojo  ";
        desactivar_lineas = "02550";

    }


    for(let i = 0; i < 3; i++){

        desactivado = prompt("Los colores de las lineas son: "+lineas_colores+ " Numero correspondiente: ");
        

        if (desactivar_lineas == desactivado){

            alert("Módulo lineas de colores desactivado");
            empezar_colores();
            break

        }else{
            alert("Error")
            explotar = explotar + 1;
            if (explotar >= 3){

                alert("Ha explotado");
                habitacion1();
                break
            }
        }
    }    

}

function empezar_colores(){

    combinacion_numeros = Math.floor(Math.random() * 4);

    if (combinacion_numeros == 0){

        combinacion_numeros = "86 44 76 55";
        desactivar_colores = "amarillo azul naranja verde";
        
    }else if (combinacion_numeros == 1){

        combinacion_numeros = "43 86 55 66";
        desactivar_colores = "rojo amarillo verde morado";
        
    }else if (combinacion_numeros == 2){

        combinacion_numeros = "43 44 76 66";
        desactivar_colores = "rojo azul naranja morado";
        
    }else if (combinacion_numeros == 3){

        combinacion_numeros = "44 76 55 66";
        desactivar_colores = "azul naranja verde morado";
        
    }


    for(let i = 0; i < 3; i++){

        desactivado = prompt("La combinación de números es: "+ combinacion_numeros + " Ingrese los colores correspondientes: ");
        

        if (desactivar_colores == desactivado){

            alert("Módulo lineas de colores desactivado");
            bomba_desactivada();
            break

        }else{
            alert("Error")
            explotar = explotar + 1;
            if (explotar >= 3){

                alert("Ha explotado");
                habitacion1();
                break
            }
        }
    }    
}

function bomba_desactivada(){

    alert("Haz desactivado la bomba con éxito");

    alert("Volver a habitación principal");

    console.clear();

    console.log("¡Qué intenso!, debo completar esto rápido para poder salir de acá.");

}