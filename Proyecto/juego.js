
/*
Cosas por hacer:


*/

//Variables 

let mision_uno = false;
let nombre_jugador = "";
let num_adivinanza1 = "";
let num_adivinanza2 = "";
let numero_valido = "";
let adivinanza1 = "";
let adivinanza2 = "";
let adivinanza3 = "";
let adivinanza4 = "";

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

    setTimeout(() => {

        console.log("Hoy en la mañana llegué a mi nuevo lugar de trabajo, en el cual debo desempeñar labores de tecnología. Pero este lugar es un poco confuso y extraño, y de cierta forma aterrador...")

    }, 1000);

    setTimeout(() => {

        console.log("Llegamos en una van, pero las demás personas se han dispersado");

    }, 8500);

    setTimeout(() => {

        console.log("Escuchas algo acercarse, es un auto a control remoto con una pantalla...");
    
    }, 10000);

    setTimeout(() => {
        console.log("Bienvenido a tu primer día en Arcade and Nanotechnology Assemble, 'A.N.A.' como verás tus compañeros ya comenzaron sus labores, aquí debes ir solo la mayor parte del tiempo, te dejaré tu primera misión..");

    }, 13000);

    setTimeout(() => {

        console.log("¡Espera! -exclamas.");

    }, 20000);

    setTimeout(() => {

        console.log("Pero ya se había ido...");

    }, 21000);

    setTimeout(() => {

        console.log("Miles de preguntas abundan en tu cabeza, pero no hay tiempo que perder, debes comenzar... ");

    }, 23000);

    setTimeout(() =>{

        confirm("VER MISION");

        mision_uno = true;

        mision1();

    }, 25000)
}


//Mision 1
function mision1(){

    do{

        nombre_jugador = prompt("Ingrese su nombre:");

    }while (nombre_jugador == "");

    
    console.log("Bienvenido a 'A.N.A.'", nombre_jugador);
        
    console.log("La primera parte consiste en resolver algunas adivinanzas.");

    console.log("¿Adivinanzas? Que clase de trabajo es este? -Piensas");

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

        alert("Correcto");
        adivinanza_r2();

    }else if (num_adivinanza1 == 2){

        do{

            adivinanza2 = prompt("Es venta y no se vende, es ana pero no es gente: _ _ _ _ _ _ _  (solo minúsculas)");

            if (adivinanza2 != "ventana"){
                
                console.log("Incorrecto")
            }

        }while (adivinanza2 != "ventana")

        alert("Correcto");
        adivinanza_r2();

    }else if (num_adivinanza1 == 3){

        do{

            adivinanza3 = prompt("¿Qué se encuentra entre playa y mar?: _ (solo minúsculas)");

            if (adivinanza3 != "y"){
                
                console.log("Incorrecto")
            }

        }while (adivinanza3 != "y")

        alert("Correcto");
        adivinanza_r2();

    }else if (num_adivinanza1 == 4){

        do{

            adivinanza4 = prompt("A un caballo se puede parecer pero por sus rayas negras sabrás lo que es: _ _ _ _ _ (solo minúsculas)");
            
            if (adivinanza4 != "zebra"){

                console.log("Incorrecto")
            }

        }while (adivinanza4 != "zebra")

        alert("Correcto");
        adivinanza_r2();

    }
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

        alert("Correcto, ahora debes buscar la siguiente misión");
        mision2();

        confirm("VER MISION");

    }else if (num_adivinanza2 == 2){

        do{

            adivinanza2 = prompt("Es venta y no se vende, es ana pero no es gente: _ _ _ _ _ _ _  (solo minúsculas)");

            if (adivinanza2 != "ventana"){

                console.log("Incorrecto")
            }

        }while (adivinanza2 != "ventana")

        alert("Correcto, ahora debes buscar la siguiente misión");
        mision2();

        confirm("VER MISION");

    }else if (num_adivinanza1 != 3 && num_adivinanza2 == 3){

        do{

            adivinanza3 = prompt("¿Qué se encuentra entre playa y mar?: _ (solo minúsculas)");

            if (adivinanza3 != "y"){

                console.log("Incorrecto")
            }

        }while (adivinanza3 != "y")

        alert("Correcto, ahora debes buscar la siguiente misión");
        mision2();

        confirm("VER MISION");

    }else if (num_adivinanza1 != 4 && num_adivinanza2 == 4){

        do{

            adivinanza4 = prompt("A un caballo se puede parecer pero por sus rayas negras sabrás lo que es: _ _ _ _ _ (solo minúsculas)");

            if (adivinanza4 != "zebra"){

                console.log("Incorrecto")
            }

        }while (adivinanza4 != "zebra")

        alert("Correcto, ahora debes buscar la siguiente misión");
        mision2();

        
        confirm("VER MISION");
        
    } 

}

//Mision 2

function mision2(){

    console.log("Continuará...")

}


