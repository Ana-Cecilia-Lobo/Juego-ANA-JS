
/*
Cosas por hacer:

- conectar credencial
- arreglar el desastre llamado codigo



- contador termino y termino en general
- desctivar los modulos

*/

//Variables

let main;
let botoncito;

let label1;
let ar1;
let enviar;
let label2;
let ar2;
let label3;
let input1;
let input2;
let input3;
let contenedor;

let num_adivinanza1 = "";
let num_adivinanza2 = "";
let adivinanza = "";
let respuesta_a1texto;
let respuesta_a2texto;


let personaje_principal = "";
let nombre_jugador = "";
let apellido_jugador = "";
let anio_nac = "";
let credencial = "";


let manual = document.createElement("img");
manual.src = 'imagenes/manual.png';


let explotar = 0;
let correcto_bomba = 0;
let cuenta_regresiva = 90;
let correcto;
let incorrecto;

let boton = "";
let desactivar_boton = "";
let dibujo_bomba;
let boton_bomba;
let clicks = 0 ;
let ronda_mala = false;

let cables = ""
let desactivar_cables = "";
let cables_contenedor;
let dibujo_cable1;
let dibujo_cable2;
let dibujo_cable3;
let dibujo_cable4;

let desactivar_numeros = "";
let combinacion = [];
let numeros_combinacion = [];
let respuesta = [];
let a = 0;
let dibujo_numylet;
let labelnumylet;

let lineas_colores = "";
let desactivar_lineas = "";
let lineas_contenedor;
let dibujo_linea1;
let dibujo_linea2;
let dibujo_linea3;
let dibujo_linea4;
let dibujo_numycol;
let combinacion_de_num;
let combinacion_colores = [];
let combinacion_numeros = "";
let desactivar_colores = "";
let rojo;
let amarillo;
let azul;
let naranja;
let verde;
let morado;

let bomba_terminada = 0;

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

function iniciar(){

    //canvas = document.getElementById("canvas");
    //ctx = canvas.getContext("2d");

    main = document.getElementById("lienzo");

    
     
    botoncito = document.createElement("button");

    botoncito.innerText = "Empezar";

    botoncito.id = "botonIniciar";

    botoncito.addEventListener("click", introduccion); 

    main.appendChild(botoncito);

   

}

/*
function borraCanvas(){

    canvas.width = 800;
    canvas.height = 500;
    
}

function principal(){

    borraCanvas();
    
}*/


function introduccion(){

    botoncito.remove();

    let introduccionTexto1 = document.createElement("h1")
    introduccionTexto1.innerText = "Es una fría y brumosa mañana... ";
    main.appendChild(introduccionTexto1);
    typingEffect(introduccionTexto1, 65);

    let introduccionTexto2 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto2.innerText = "Hoy en la mañana llegué a mi nuevo lugar de trabajo, en el cual debo desempeñar labores de tecnología. Este lugar es un poco extraño y confuso, y de cierta forma aterrador... ";
        main.appendChild(introduccionTexto2);
        typingEffect(introduccionTexto2, 65);
    }, 3000)

    let introduccionTexto3 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto3.innerText = "Escuchas algo acercarse, es un auto a control remoto con una pantalla... ";
        main.appendChild(introduccionTexto3);
        typingEffect(introduccionTexto3, 65);
    }, 15000)
    

    setTimeout(() => {

        introduccionTexto1.remove();
        introduccionTexto2.remove();
        introduccionTexto3.remove();

    }, 24000);

    let introduccionTexto4 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto4.innerText = "Bienvenido a tu primer día en Aumented reality, Nanotechnology and Arcade, 'A.N.A.' como verás tus compañeros ya comenzaron sus labores, te dejaré tu primera misión... ";
        main.appendChild(introduccionTexto4);
        typingEffect(introduccionTexto4, 65);
    }, 25000)

    let introduccionTexto5 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto5.innerText = "¡Espera! -exclamas. ";
        main.appendChild(introduccionTexto5);
        typingEffect(introduccionTexto5, 65);
    }, 37000)

    let introduccionTexto6 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto6.innerText = "Pero ya se había ido...  ";
        main.appendChild(introduccionTexto6);
        typingEffect(introduccionTexto6, 65);
    }, 39000)

    let introduccionTexto7 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto7.innerText = "Miles de preguntas abundan en tu cabeza, pero no hay tiempo que perder, debes comenzar...  ";
        main.appendChild(introduccionTexto7);
        typingEffect(introduccionTexto7, 65);
    }, 41000)


    setTimeout(() =>{ 

        botoncito = document.createElement("button");

        botoncito.innerText = "VER MISION";

        botoncito.id = "mision";

        botoncito.addEventListener("click", function m1(){

            mision1();
            introduccionTexto4.remove();
            introduccionTexto5.remove();
            introduccionTexto6.remove();
            introduccionTexto7.remove();

        })

        main.appendChild(botoncito);

    }, 48000)

}

//Efecto de tipear
function typingEffect(element,speed){

    let text = element.innerText;
    element.innerText = "";
    let i = 0;
    
    let timer = setInterval(function(){

      if(i < text.length){

        element.append(text.charAt(i));
        i++;
        
      }else{
        
        clearInterval(timer);

      }
    },speed)
    
  }
  

//Mision 1
function mision1(){
    
    botoncito.remove();

    let mision1texto1 = document.createElement("p")
    mision1texto1.innerText = "La primera parte consiste en resolver algunas adivinanzas. ";
    main.appendChild(mision1texto1);
    typingEffect(mision1texto1, 65);

    let mision1texto2 = document.createElement("p")
    setTimeout(() =>{ 
        mision1texto2.innerText = "¿Adivinanzas? ¿Qué clase de trabajo es este? -Piensas. ";
        main.appendChild(mision1texto2);
        typingEffect(mision1texto2, 65);
    }, 4000)

    setTimeout(() =>{

        mision1texto1.remove();
        mision1texto2.remove();

    }, 10000);


    setTimeout(() =>{

        label1 = document.createElement("label");

        label1.innerText = "Primera ronda de adivinanzas, escoge un numero del 1 al 4 ";

        label1.setAttribute("for", "ar1");

        label1.id = "lar1";

        main.appendChild(label1);



        ar1 = document.createElement("input");

        ar1 .setAttribute("type", "number");

        ar1 .setAttribute("min", "1");

        ar1.setAttribute("max", "4");

        ar1.id = "ar1";

        main.appendChild(ar1);



        enviar = document.createElement("input");

        enviar.setAttribute("type","submit");

        enviar.id = "ar1";

        enviar.addEventListener("click", AR1);

        main.appendChild(enviar);

    }, 12000);

}

function AR1(){

    num_adivinanza1 = document.getElementById("ar1").value

    label1.remove();
    ar1.remove();
    enviar.remove();
            
    if (num_adivinanza1 >= 1 && num_adivinanza1 <= 4){

        adivinanza_r1();

    }else{

        mision1();
        
    }

}

function adivinanza_r1(){

    if (num_adivinanza1 == 1){

        label1 = document.createElement("label");

        label1.innerText = "Tengo agujas y no se coser, tengo números y no se leer: _ _ _ _ _  (solo minúsculas)";

        label1.setAttribute("for", "ar");
        
        label1.id = "lar1";

        main.appendChild(label1);


        ar1 = document.createElement("input");

        ar1.setAttribute("type", "text");

        ar1.id = "ar";

        main.appendChild(ar1);


        enviar = document.createElement("input");

        enviar.setAttribute("type","submit");

        enviar.id = "ar";

        enviar.addEventListener("click", respuesta_a1);

        main.appendChild(enviar);

    }else if (num_adivinanza1 == 2){

        label1 = document.createElement("label");

        label1.innerText = "Es venta y no se vende, es ana pero no es gente: _ _ _ _ _ _ _  (solo minúsculas)";

        label1.setAttribute("for", "ar");

        label1.id = "lar1";

        main.appendChild(label1);


        ar1 = document.createElement("input");

        ar1.setAttribute("type", "text");

        ar1.id = "ar";

        main.appendChild(ar1);


        enviar = document.createElement("input");

        enviar.setAttribute("type","submit");

        enviar.addEventListener("click", respuesta_a1);
        
        enviar.id = "ar";

        main.appendChild(enviar);

    }else if (num_adivinanza1 == 3){

        label1 = document.createElement("label");

        label1.innerText = "¿Qué se encuentra entre playa y mar?: _ (solo minúsculas)";

        label1.setAttribute("for", "ar");

        label1.id = "lar1";

        main.appendChild(label1);


        ar1 = document.createElement("input");

        ar1.setAttribute("type", "text");

        ar1.id = "ar";

        main.appendChild(ar1);


        enviar = document.createElement("input");

        enviar.setAttribute("type","submit");

        enviar.id = "ar";

        enviar.addEventListener("click", respuesta_a1);

        main.appendChild(enviar);

    }else if (num_adivinanza1 == 4){

        label1 = document.createElement("label");

        label1.innerText = "A un caballo se puede parecer pero por sus rayas negras sabrás lo que es: _ _ _ _ _ (solo minúsculas)";

        label1.setAttribute("for", "ar");

        label1.id = "lar1";

        main.appendChild(label1);


        ar1 = document.createElement("input");

        ar1.setAttribute("type", "text");

        ar1.id = "ar";

        main.appendChild(ar1);


        enviar = document.createElement("input");

        enviar.setAttribute("type","submit");

        enviar.addEventListener("click", respuesta_a1);

        enviar.id = "ar";

        main.appendChild(enviar);

    }

}

function respuesta_a1(){

    adivinanza = document.getElementById("ar").value;

    if (adivinanza == "reloj" || adivinanza == "ventana" || adivinanza == "y" || adivinanza == "zebra"){
        
        label1.remove();
        ar1.remove();
        enviar.remove();

        respuesta_a1texto = document.createElement("p")
        respuesta_a1texto.innerText = "Correcto ";
        main.appendChild(respuesta_a1texto);


        
        label2 = document.createElement("label");

        label2.innerText = "Segunda ronda de adivinanzas, escoge un numero del 1 al 4 (distinto al anterior)";

        label2.setAttribute("for", "ar2");

        label2.id = "lar2";

        main.appendChild(label2);



        ar2 = document.createElement("input");

        ar2 .setAttribute("type", "number");

        ar2 .setAttribute("min", "1");

        ar2.setAttribute("max", "4");

        ar2 .id = "ar2";

        main.appendChild(ar2);



        enviar = document.createElement("input");

        enviar.setAttribute("type","submit");

        enviar .id = "ar2";

        enviar.addEventListener("click", AR2);

        main.appendChild(enviar);
        

    }else{


        let respuesta_a1texto = document.createElement("p")
        respuesta_a1texto.innerText = "Incorrecto ";
        main.appendChild(respuesta_a1texto);

        setTimeout(() => {

            respuesta_a1texto.remove();
        
        }, 2500);
    }


}

function AR2(){

    num_adivinanza2 = document.getElementById("ar2").value;
    
    if (num_adivinanza1 != num_adivinanza2){

        if (num_adivinanza2 >= 1 && num_adivinanza2 <= 4){
            label2.remove();
            ar2.remove();
            enviar.remove();
            respuesta_a1texto.remove();

            adivinanza_r2();

        }

    }else{

        let ad2 = document.createElement("p")
        ad2.innerText = "Debes escoger un numero distinto al de la primera adivinanza ";
        main.appendChild(ad2);

        setTimeout(() => {

            ad2.remove();
        
        }, 2500);
        
    }

}

function adivinanza_r2(){


    if (num_adivinanza2 == 1){

        label1 = document.createElement("label");

        label1.innerText = "Tengo agujas y no se coser, tengo números y no se leer: _ _ _ _ _  (solo minúsculas)";

        label1.setAttribute("for", "ar");

        label1.id = "lar";

        main.appendChild(label1);


        ar1 = document.createElement("input");

        ar1.setAttribute("type", "text");

        ar1.id = "ar";

        main.appendChild(ar1);


        enviar = document.createElement("input");

        enviar.setAttribute("type","submit");

        enviar.id = "ar";

        enviar.addEventListener("click", respuesta_a2);

        main.appendChild(enviar);

    }else if (num_adivinanza2 == 2){

        label1 = document.createElement("label");

        label1.innerText = "Es venta y no se vende, es ana pero no es gente: _ _ _ _ _ _ _  (solo minúsculas)";

        label1.setAttribute("for", "ar");

        label1.id = "lar";

        main.appendChild(label1);


        ar1 = document.createElement("input");

        ar1.setAttribute("type", "text");

        ar1.id = "ar";

        main.appendChild(ar1);


        enviar = document.createElement("input");

        enviar.setAttribute("type","submit");

        enviar.id = "ar";

        enviar.addEventListener("click", respuesta_a2);

        main.appendChild(enviar);

    }else if (num_adivinanza2 == 3){

        label1 = document.createElement("label");

        label1.innerText = "¿Qué se encuentra entre playa y mar?: _ (solo minúsculas)";

        label1.setAttribute("for", "ar");

        label1.id = "lar";

        main.appendChild(label1);


        ar1 = document.createElement("input");

        ar1.setAttribute("type", "text");

        ar1.id = "ar";

        main.appendChild(ar1);


        enviar = document.createElement("input");

        enviar.setAttribute("type","submit");

        enviar.id = "ar";

        enviar.addEventListener("click", respuesta_a2);

        main.appendChild(enviar);

    }else if (num_adivinanza2 == 4){

        label1 = document.createElement("label");

        label1.innerText = "A un caballo se puede parecer pero por sus rayas negras sabrás lo que es: _ _ _ _ _ (solo minúsculas)";

        label1.setAttribute("for", "ar");

        label1.id = "lar";

        main.appendChild(label1);


        ar1 = document.createElement("input");

        ar1.setAttribute("type", "text");

        ar1.id = "ar";

        main.appendChild(ar1);


        enviar = document.createElement("input");

        enviar.setAttribute("type","submit");

        enviar.id = "ar";

        enviar.addEventListener("click", respuesta_a2);

        main.appendChild(enviar);

    }

}

function respuesta_a2(){

    adivinanza = document.getElementById("ar").value;

    if (adivinanza == "reloj" || adivinanza == "ventana" || adivinanza == "y" || adivinanza == "zebra"){
        
        label1.remove();
        ar1.remove();
        enviar.remove();

        respuesta_a2texto = document.createElement("p")
        respuesta_a2texto.innerText = "¡Correcto! Esto era parte de un calentamiento mental. Ahora necesito que vayas al edificio principal. ";
        main.appendChild(respuesta_a2texto);


        botoncito = document.createElement("button");

        botoncito.innerText = "Ir a edificio principal";
    
        botoncito.id = "edif_principal";
    
        botoncito.addEventListener("click", function m2(){

            respuesta_a2texto.remove();
            mision2();

        });
    
        main.appendChild(botoncito);

    }else{

        let respuesta_a2texto = document.createElement("p")
        respuesta_a2texto.innerText = "Incorrecto ";
        main.appendChild(respuesta_a2texto);

        setTimeout(() => {

            respuesta_a2texto.remove();
        
        }, 2500);
        
    }

}



//Mision 2

function mision2(){

    botoncito.remove();

    let mision2texto = document.createElement("p")
    mision2texto.innerText = "Debe crear su tarjeta de la empresa ";
    main.appendChild(mision2texto);
    
    label1 = document.createElement("label");

    label1.innerText = "Ingrese su nombre: ";

    label1.setAttribute("for", "nombre");

    label1.id = "label1";

    main.append(label1);



    input1 = document.createElement("input");

    input1.setAttribute("type", "text");

    input1.id = "nombre";

    main.append(input1);



    label2 = document.createElement("label");

    label2.innerText = "Ingrese su apellido: ";

    label2.setAttribute("for", "apellido");

    label2.id = "label2";

    main.append(label2);



    input2 = document.createElement("input");

    input2.setAttribute("type", "text");

    input2.id = "apellido";

    main.append(input2);
    

    label3 = document.createElement("label");

    label3.innerText = "Ingrese su año de nacimiento: ";

    label3.setAttribute("for", "anio");

    label3.id = "label3";

    main.append(label3);



    input3 = document.createElement("input");

    input3.setAttribute("type", "text");

    input3.id = "anio";

    main.append(input3);



    enviar = document.createElement("input");

    enviar.setAttribute("type","submit");

    enviar.addEventListener("click", function ct(){

        mision2texto.remove();
        creacion_tarjeta();
        
    });

    enviar.id = "enviar";

    main.append(enviar);

}

function creacion_tarjeta(){

    nombre_jugador = document.getElementById("nombre").value;
    apellido_jugador = document.getElementById("apellido").value;
    anio_nac = document.getElementById("anio").value;

    label1.remove();
    label2.remove();
    label3.remove();
    input1.remove();
    input2.remove();
    input3.remove();
    enviar.remove();

    personaje_principal = new Persona(nombre_jugador, apellido_jugador, anio_nac);

    credencial = [-1,nombre_jugador.slice(0,3), apellido_jugador.slice(0,3), anio_nac.slice(2,4)];

    credencial.reverse()

    //console.log(credencial.join(""))

    let credencialtexto1 = document.createElement("p")
    credencialtexto1.innerText = "¡Listo! credencial creada, la cual es de nivel 1. ";
    main.appendChild(credencialtexto1);
    typingEffect(credencialtexto1, 65);

    let credencialtexto2 = document.createElement("p")
    setTimeout(() =>{ 
        credencialtexto2.innerText = "Ahora debes ir a tu lugar de trabajo, al final del pasillo a la izquierda. ";
        main.appendChild(credencialtexto2);
        typingEffect(credencialtexto2, 65);
    }, 4000)

    setTimeout(() =>{ 
        botoncito = document.createElement("button");

        botoncito.innerText = "Ir a lugar de trabajo";

        botoncito.id = "hab_principal";

        botoncito.addEventListener("click", function hp(){

            credencialtexto1.remove();
            credencialtexto2.remove();
            habitacion_principal();
        
        });

        main.appendChild(botoncito);
    }, 9000)
    
}

function habitacion_principal(){

    botoncito.remove();

    let habitacion_t1 = document.createElement("p")
    habitacion_t1.innerText = "Entras en una habitación extraña con otras 4 puertas. ";
    main.appendChild(habitacion_t1);
    typingEffect(habitacion_t1, 65);

    let habitacion_t2 = document.createElement("p")
    setTimeout(() =>{ 
        habitacion_t2.innerText = "¿Qué es este lugar? -piensas. ";
        main.appendChild(habitacion_t2);
        typingEffect(habitacion_t2, 65);
    }, 4000)


    let habitacion_t3 = document.createElement("p")
    setTimeout(() =>{ 
        habitacion_t3.innerText = "De nuevo se acerca el auto a control remoto. ";
        main.appendChild(habitacion_t3);
        typingEffect(habitacion_t3, 65);
    }, 6000)

    let habitacion_t4 = document.createElement("p")
    setTimeout(() =>{ 
        habitacion_t4.innerText = "Ahora podrás empezar tus labores, debes completar las misiones de cada habitación. ";
        main.appendChild(habitacion_t4);
        typingEffect(habitacion_t4, 65);
    }, 9000)

    let habitacion_t5 = document.createElement("p")
    setTimeout(() =>{ 
        habitacion_t5.innerText = "Empiezo a acostumbrarme a los misterios -piensas. ";
        main.appendChild(habitacion_t5);
        typingEffect(habitacion_t5, 65);
    }, 16000)


    botoncito = document.createElement("button");

    botoncito.innerText = "Entrar a habitacion 1";

    botoncito.id = "hab1";

    botoncito.addEventListener("click", function hab1(){
        

        habitacion_t1.remove();
        habitacion_t2.remove();
        habitacion_t3.remove();
        habitacion_t4.remove();
        habitacion_t5.remove();
        habitacion1();
        
    });

    setTimeout(() => {main.appendChild(botoncito);}, 20000);


    
}



//Habitación 1

function habitacion1(){

    botoncito.remove();

    let habitacion_t1 = document.createElement("p")
    habitacion_t1.innerText = "Entras a la primera habitación, y de repente algo te ciega... ";
    main.appendChild(habitacion_t1);
    typingEffect(habitacion_t1, 65);

    let habitacion_t2 = document.createElement("p")
    setTimeout(() =>{ 
        habitacion_t2.innerText = "Al volver a abrir los ojos, ves que hay una mesa con algo encima, tiene unas luces y un contador... ¿¡ES UNA BOMBA!? -exclamas. Rapidamente te pones manos a la obra para desactivarla. ";
        main.appendChild(habitacion_t2);
        typingEffect(habitacion_t2, 65);
    }, 5000)

    botoncito = document.createElement("button");

    botoncito.innerText = "Comenzar";

    botoncito.id = "mision";

    botoncito.addEventListener("click", function b(){
        
        
        habitacion_t1.remove();
        habitacion_t2.remove();
        bomba();
    
    
    });
    
    setTimeout(() => {main.appendChild(botoncito);}, 18000);
    
}

function bomba(){

    botoncito.remove();

    dibujo_bomba = document.createElement("div");

    dibujo_bomba.id = "bomba";

    main.appendChild(dibujo_bomba);


    let herramientas = document.createElement("div");
    herramientas.id = "herramientas";
    main.appendChild(herramientas);

    correcto = document.createElement("h3");

    correcto.innerText = correcto_bomba + " módulos desactivados de 5";

    correcto.id = "correcto";

    herramientas.appendChild(correcto);


    let textomanual = document.createElement("h3");

    textomanual.id = "textomanual";

    textomanual.innerText = "Manual (abajo)"

    herramientas.appendChild(textomanual); 


    incorrecto = document.createElement("h3");

    incorrecto.innerText = explotar + " errores de 3";

    incorrecto.id = "incorrecto";

    herramientas.appendChild(incorrecto);
    

    let manual = document.createElement("div");

    manual.id = "manual";

    manual.innerHTML = "<img src='./imagenes/manual.png'>"

    main.appendChild(manual);


    const timer = setInterval(()=>{

        tiempo.innerText = cuenta_regresiva;
        cuenta_regresiva--;

        if (cuenta_regresiva == 0){

            clearInterval(timer);
            borrarbomba();
        }
    }, 1000);


    let tiempo = document.createElement("div");

    tiempo.id = "timer";

    tiempo.innerText = cuenta_regresiva;

    dibujo_bomba.appendChild(tiempo)

    //Modulo 1
    boton = Math.floor(Math.random() * 5);

    if (boton == 1){

        boton = "#FF0000";
        desactivar_boton = "3";


    }else if (boton == 2){

        boton = "#0000FF";
        desactivar_boton = "4";

    }else if (boton == 3){

        boton = "#008000";
        desactivar_boton = "5";

    }else{

        boton = "#FFFF00";
        desactivar_boton = "6";

    }

    //Dibujo botón

    boton_bomba = document.createElement("button");

    boton_bomba.id = "boton";

    boton_bomba.addEventListener("click", function botondebomba(){

        clicks++
        console.log(clicks, "boton1");
        empezar_boton()
    }); 

    boton_bomba.style.backgroundColor = boton
    
    dibujo_bomba.appendChild(boton_bomba);




    //Modulo 2

    cables = Math.floor(Math.random() * 5);

    if (cables == 1){

        cables = ["#FFFF00", "#FF0000", "#0000FF", "#FFFFFF"];
        desactivar_cables = "#FF0000";
    

    }else if (cables == 2){

        cables = ["#FF0000", "#FF0080", "#008000", "#FFFFFF"];
        desactivar_cables = "#008000";

    }else if (cables == 3){

        cables = ["#0000FF", "#800080", "#FF0000", "#FFFFFF"];
        desactivar_cables = "#0000FF";

    } else {

        cables = ["#FF0000", "#0000FF", "#008000", "#FF0080"];
        desactivar_cables = "#FF0080";

    }

    //Dibujo cables
    cables_contenedor = document.createElement("div");

    cables_contenedor.id = "cables_contenedor";

    cables_contenedor.style.backgroundColor = "";
    
    dibujo_bomba.appendChild(cables_contenedor);




    dibujo_cable1 = document.createElement("div");
    dibujo_cable1.id = "cables";
    dibujo_cable1.addEventListener("click",function dc(){

        if(desactivar_cables == cables[0]){

            empezar_cables();
        }else{
            explotar = explotar + 1;
            incorrecto.style.color = "red";
            incorrecto.innerText = explotar + " errores de 3";
            setTimeout(() =>{incorrecto.style.color = "black";}, 3000);
            
            if (explotar >= 3){

                borrarbomba();
            }
        }
        
    }); 
    cables_contenedor.appendChild(dibujo_cable1);

    dibujo_cable2 = document.createElement("div");
    dibujo_cable2.id = "cables";
    dibujo_cable2.addEventListener("click",function dc(){

        if(desactivar_cables == cables[1]){

            empezar_cables();
        }else{
            explotar = explotar + 1;
            incorrecto.style.color = "red";
            incorrecto.innerText = explotar + " errores de 3";
            setTimeout(() =>{incorrecto.style.color = "black";}, 3000);

            if (explotar >= 3){

                borrarbomba();
            }
        }
        
    }); 
    cables_contenedor.appendChild(dibujo_cable2);

    dibujo_cable3 = document.createElement("div");
    dibujo_cable3.id = "cables";
    dibujo_cable3.addEventListener("click",function dc(){

        if(desactivar_cables == cables[2]){

            empezar_cables();
        }else{
            explotar = explotar + 1;
            incorrecto.style.color = "red";
            incorrecto.innerText = explotar + " errores de 3";
            setTimeout(() =>{incorrecto.style.color = "black";}, 3000);
            if (explotar >= 3){

                borrarbomba();
            }
        }
        
    }); 
    cables_contenedor.appendChild(dibujo_cable3);

    dibujo_cable4 = document.createElement("div");
    dibujo_cable4.id = "cables";
    dibujo_cable4.addEventListener("click",function dc(){

        if(desactivar_cables == cables[3]){

            empezar_cables();
        }else{
            explotar = explotar + 1;
            incorrecto.style.color = "red";
            incorrecto.innerText = explotar + " errores de 3";
            setTimeout(() =>{incorrecto.style.color = "black";}, 3000);
            
            if (explotar >= 3){

                borrarbomba();
            }
        }
        
    }); 
    cables_contenedor.appendChild(dibujo_cable4);

    dibujo_cable1.style.backgroundColor = cables[0];
    dibujo_cable2.style.backgroundColor = cables[1];
    dibujo_cable3.style.backgroundColor = cables[2];
    dibujo_cable4.style.backgroundColor = cables[3];


    
    //Modulo 3

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

    //Dibujo numeros y letras

    dibujo_numylet = document.createElement("div");

    dibujo_numylet.id = "numylet_contenedor";
    
    dibujo_bomba.appendChild(dibujo_numylet);



    labelnumylet = document.createElement("div");
    labelnumylet.innerText = numeros_combinacion.join("");
    labelnumylet.id = "numyletlab";
    dibujo_numylet.appendChild(labelnumylet);


    input1 = document.createElement("input");

    input1.setAttribute("type", "text");

    input1.id = "numylet";

    dibujo_numylet.append(input1)


    enviar = document.createElement("input");

    enviar.setAttribute("type","submit");

    enviar.addEventListener("click", function desactivarlosnum(){

        desactivar_numeros = document.getElementById("numylet").value
        empezar_numeros();
    });

    enviar.id = "numyletsub";

    dibujo_numylet.append(enviar);



    //Modulo 4

    lineas_colores = Math.floor(Math.random() * 3);

    if (lineas_colores == 0){

        lineas_colores = ["#FF0000", "#00FF00", "#0000FF"];
        desactivar_lineas = "25500";

    } else if (lineas_colores == 1){

        lineas_colores = ["#0000FF", "#FF0000", "#00FF00"];
        desactivar_lineas = "00255";

    }else if (lineas_colores == 2){

        lineas_colores = ["#00FF00", "#0000FF", "#FF0000"];
        desactivar_lineas = "02550";

    }

    //Dibujo lineas

    lineas_contenedor = document.createElement("div");

    lineas_contenedor.id = "lineas_contenedor";
    
    dibujo_bomba.appendChild(lineas_contenedor);


    dibujo_linea1 = document.createElement("div");
    dibujo_linea1.id = "lineas";
    lineas_contenedor.appendChild(dibujo_linea1);

    dibujo_linea2 = document.createElement("div");
    dibujo_linea2.id = "lineas";
    lineas_contenedor.appendChild(dibujo_linea2);

    dibujo_linea3 = document.createElement("div");
    dibujo_linea3.id = "lineas";
    lineas_contenedor.appendChild(dibujo_linea3);


    dibujo_linea1.style.backgroundColor = lineas_colores[0];
    dibujo_linea2.style.backgroundColor = lineas_colores[1];
    dibujo_linea3.style.backgroundColor = lineas_colores[2];


        input1 = document.createElement("input");

        input1.setAttribute("type", "text");

        input1.id = "lineasinp";

        lineas_contenedor.append(input1)


        enviar = document.createElement("input");

        enviar.setAttribute("type","submit");

        enviar.addEventListener("click", function desactivarlaslineas(){

            respuesta = document.getElementById("lineasinp").value
            empezar_lineas();
        });

        enviar.id = "lineassub";

        lineas_contenedor.append(enviar);



    //Modulo 5
    combinacion_numeros = Math.floor(Math.random() * 4);

    if (combinacion_numeros == 0){

        combinacion_numeros = "86 44 76 55";
        desactivar_colores = ["amarillo", "azul", "naranja", "verde"]
        
    }else if (combinacion_numeros == 1){

        combinacion_numeros = "43 86 55 66";
        desactivar_colores = ["rojo", "amarillo", "verde", "morado"];
        
    }else if (combinacion_numeros == 2){

        combinacion_numeros = "43 44 76 66";
        desactivar_colores = ["rojo", "azul", "naranja", "morado"];
        
    }else if (combinacion_numeros == 3){

        combinacion_numeros = "44 76 55 66";
        desactivar_colores = ["azul", "naranja", "verde", "morado"];
        
    }


    //Dibujo num y colores

    dibujo_numycol = document.createElement("div");
    dibujo_numycol.id = "dibujo_numycol";
    dibujo_bomba.appendChild(dibujo_numycol);

    combinacion_de_num = document.createElement("div");
    combinacion_de_num.innerText = combinacion_numeros;
    combinacion_de_num.id = "combinacion";
    dibujo_numycol.appendChild(combinacion_de_num);


    rojo = document.createElement("button");

    rojo.id = "rojo";

    rojo.style.backgroundColor = "red";

    rojo.addEventListener("click",function dcol(){

        combinacion_colores.push("rojo");
        
    }); 
    
    dibujo_numycol.appendChild(rojo);


    amarillo = document.createElement("button");

    amarillo.id = "amarillo";

    amarillo.style.backgroundColor = "yellow";

    amarillo.addEventListener("click",function dcol(){

        combinacion_colores.push("amarillo");
        
    }); 

    dibujo_numycol.appendChild(amarillo);


    azul = document.createElement("button");

    azul.id = "azul";

    azul.style.backgroundColor = "blue";

    azul.addEventListener("click",function dcol(){

        combinacion_colores.push("azul");
        
    }); 
    
    dibujo_numycol.appendChild(azul);


    naranja = document.createElement("button");

    naranja.id = "naranja";

    naranja.style.backgroundColor = "orange";

    naranja.addEventListener("click",function dcol(){

        combinacion_colores.push("naranja");
        
    }); 

    dibujo_numycol.appendChild(naranja);


    verde = document.createElement("button");

    verde.id = "verde";

    verde.style.backgroundColor = "green";

    verde.addEventListener("click",function dcol(){

        combinacion_colores.push("verde");
        
    }); 

    dibujo_numycol.appendChild(verde);


    morado = document.createElement("button");

    morado.id = "morado";

    morado.style.backgroundColor = "purple";

    morado.addEventListener("click",function dcol(){

        combinacion_colores.push("morado");

        
    }); 

    dibujo_numycol.appendChild(morado);


    enviar = document.createElement("input");

    enviar.setAttribute("type","submit");

    enviar.addEventListener("click", function desactivarcol(){

        empezar_colores();
    });

    enviar.id = "colsub";

    dibujo_numycol.append(enviar);
    
    

}

function borrarbomba(){

    let final_bomba = document.createElement("h3");
    final_bomba.id = "finalbomba";
    if(explotar >= 3 || cuenta_regresiva == 0){

        final_bomba.innerText = "Ha explotado";
        explotar = 0;
        correcto = 0;
        cuenta_regresiva = 90;

        setTimeout(() =>{

            main.remove(); 

            main = document.createElement("main");
            document.body.appendChild(main);
            volver();
           
           
        }, 2500);
        

    }else if(bomba_terminada == 5){

        final_bomba.innerText = "Has desactivado la bomba con éxito";

        setTimeout(() =>{

            main.remove();
            bomba_desactivada();
        
        }, 2500);


    }
    dibujo_bomba.appendChild(final_bomba)


}

function volver(){

    botoncito = document.createElement("button");

    botoncito.innerText = "Volver a intentar";
    
    botoncito.id = "volver";
    
    botoncito.addEventListener("click", habitacion1);
    
    main.appendChild(botoncito);
    
}


function empezar_boton(){
    
    console.log(ronda_mala)
    
    if (clicks > desactivar_boton){

        ronda_mala = true;
        setTimeout(() =>{ronda_mala = false;}, 1500);
        explotar = explotar + 1;
        
        incorrecto.style.color = "red";
        incorrecto.innerText = explotar + " errores de 3";

        incorrecto.style.color = "black";
        
        
        console.log(explotar)
        clicks = 0
        empezar_boton()
        if (explotar >= 3){

            borrarbomba();
                         
        }

    }else if(clicks == desactivar_boton){

        setTimeout(() =>{if(ronda_mala == false){

            
            bomba_terminada ++;
            correcto.style.color = "green";
            correcto.innerText = bomba_terminada + " modulos desactivados de 5";
            setTimeout(() =>{correcto.style.color = "black";}, 3000);
            se_desactivo()
            
        }}, 1500);
            
            
    }
    
}

function empezar_cables(){

    
    bomba_terminada ++;
    correcto.style.color = "green";
    correcto.innerText = bomba_terminada + " modulos desactivados de 5";

    correcto.style.color = "black";
    se_desactivo()

}

function empezar_numeros(){

    if (desactivar_numeros == respuesta.join("")){

        
        bomba_terminada ++;
        correcto.style.color = "green";
        correcto.innerText = bomba_terminada + " modulos desactivados de 5";

        correcto.style.color = "black";
        se_desactivo()

    }else{

        
        explotar = explotar + 1;

        incorrecto.style.color = "red";
        incorrecto.innerText = explotar + " errores de 3";
        setTimeout(() =>{incorrecto.style.color = "black";}, 3000);

            if (explotar >= 3){

                borrarbomba();
                
            }
    } 
    
}

function empezar_lineas(){

    if (respuesta == desactivar_lineas){

        bomba_terminada ++;
        correcto.style.color = "green";
        correcto.innerText = bomba_terminada + " modulos desactivados de 5";

        correcto.style.color = "black"
        se_desactivo()

    }else{

        explotar = explotar + 1;
        incorrecto.style.color = "red";
        incorrecto.innerText = explotar + " errores de 3";
        setTimeout(() =>{incorrecto.style.color = "black";}, 3000);

            if (explotar >= 3){

                borrarbomba();
                
            }

    }



}

function empezar_colores(){

    if (combinacion_colores.join(" ") == desactivar_colores.join(" ")){

        
        bomba_terminada ++;
        correcto.style.color = "green";
        correcto.innerText = bomba_terminada + " modulos desactivados de 5";
        
        correcto.style.color = "black"
        se_desactivo()

    }else{
        
        explotar = explotar + 1;
        incorrecto.style.color = "red";
        incorrecto.innerText = explotar + " errores de 3";
        
        incorrecto.style.color = "black";
        combinacion_colores = [];
 
        if (explotar >= 3){

            borrarbomba();
        }
    }
   
}

function se_desactivo(){

    if (bomba_terminada == 5){

        borrarbomba();
    }
}

function bomba_desactivada(){


    let main = document.createElement("main");
    document.body.appendChild(main);


    botoncito = document.createElement("button");

    botoncito.innerText = "Volver a habitación principal";
    
    botoncito.id = "edif_principal";
    
    //botoncito.addEventListener("click", );
    
    main.appendChild(botoncito);


    console.log("¡Qué intenso!");

}


















let canvas;
let ctx;
let FPS = 10;

    //canvas = document.getElementById("canvas");
    //ctx = canvas.getContext("2d");

function autito(){

    botoncito.remove();

    canvas = document.createElement("canvas");
    
    main.appendChild(canvas);

}