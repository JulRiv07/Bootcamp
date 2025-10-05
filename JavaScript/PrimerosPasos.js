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

const a = Number(prompt("Ingresar un numero: "));
const b = Number(prompt("Ingrese otro numero: "));
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
const dia = prompt("Dia (lu, ma, mi, ju, vi)");
switch (dia) {
    case "lu":
    case "ma":
    case "mi":
    case "ju":
    case "vi":
        console.log("Es dia laboral");
        break;
    default: console.log("Fin de semana");
        break;
}

//? Bucles (while, do while, for) 

//* While, mientras algo sea verdadero
let i = 1;
while( i <= 3 ){
    console.log("Vuelta: " + i);
    i++;
}

let x = 1;
do {
    console.log("X vale: " + x);
    x++;
} while(x <= 3);

for(let i = 0; i < 5; i++){
    console.log("i = " + i);
}

//? Arreglos (Arrays) - lista de cosas
const frutas = ["Manzana", "Pera", "Banano", "Uva"];
console.log(frutas[0]);
frutas.push("Mango");
frutas.pop();
console.log(frutas.length);

//! Recorres arrays
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

//? Objetos 

const persona = {
    nombre: "Julian",
    edad: 18,
    vivo: true
};

console.log(persona.nombre);
persona.edad = 21;
persona.altura = 1.68;

//! Sacar valores

const { nombre1, edad1 } = persona;
console.log(nombre, edad); 

//? Cadenas (strings) y plantillas
const nombre2 = "Ana";
const saludo = 'Hola, ${nombre2}!';
console.log(saludo);
console.log("Ana".length);
console.log("Hola".toUpperCase()); 

//? Funciones...

function saludar(nombre){
    return 'Hola, ${nombre}';
}

const mensaje = saludar("Julian");
console.log(mensaje);

function cuadrado(n){
    return n*n;
}

const y = Number(prompt("Ingrese un numero: "));
console.log("El cuadrado de " + y, " es: " + cuadrado(y));

//? Funciones en una linea

const doble = n => n * 2;
const suma = (a, b) => a + b;
console.log(doble(7), suna(3, 4));

//? Funciones de orden superior
//! Funciones con funciones

const nums = [1,2,3,4,5];
const dobles = nums.map(n => n * 2);
const pares = nums.filter(n => n % 2 === 0);


