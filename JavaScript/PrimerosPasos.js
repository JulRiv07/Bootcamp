//? Variables
let age = 18;
const PI = 3.1416
let name = "Julian";
let llueve = false;

//? Mostrar datos en pantalla
console.log("Hola, mundo Java Script");
alert("¡Virus!"); //! Ventana emergente

//? Pedir datos al usuario
const nombre = prompt("Como es tu nombre? "); //! prompt (Siempre recibe letras)
alert("Hola, " + nombre); 

const a = number(prompt("Ingresar un numero: "));
const b = number(prompt("Ingrese otro numero: "));
alert("La suma es: " + (a + b));

//? Operadores mas importantes
//* aritmeticos: +, -, *, /, %, **.
//* comparacion: === (Igual estrictamente), !==, <, >, <=, >=-
//* logicos: && (Y), | (o), ! (no).
console.log(2+3);
console.log(10%3);
console.log(5 === "5");
console.log(true &&  false);

//? Condicionales 
const edad = Number(prompt("Ingrese su edad: "));

if(edad >= 18 ) {
    console.log("Eres mayor de edad");
} else if (edad >= 13 ){
    console.log("Eres adolescente");
} else {
    console.log("Eres niño");
}

//! Switch (Para muchas opciones)
const dia = prompt("Dia (Lu, ma, mi, ju, vi");
switch (dia) {
    case "Lu":
    case "ma":
    case "mi":
    case "ju":
    case "vi":
        console.log("Es dia laboral");

    default: console.log("Fin de semana");
        break;
}

//? Bucles (while, do while, for) 
let i = 1;
while( i <= 3 ){
    console.log("Vuelta: " + i);
    i++;
}