
const titulo = document.getElementById("titulo");
const salida = document.getElementById("salida");
const btnSaludo = document.getElementById("btnSaludo");
const btnColor = document.getElementById("btnColor");
const nombreInp =  document.getElementById("Nombre");
const btnMostrar = document.getElementById("btnMostrar");
const mensaje = document.getElementById("mensaje");


salida.innerText = "JS esta en esta pagina";
btnSaludo.addEventListener("click", () => {
    alert("¡Hola!")
});

btnColor.addEventListener("click", () => {
    titulo.classList.toggle("resaltado")
});

btnMostrar.addEventListener("click", () => {
    const Nombre = nombreInp.value.trim();
    if(Nombre === ""){
        mensaje.innerText = "Por favor, escriba su nombre";
    } else {
        mensaje.innerText = `¡Hola, ${Nombre}! Bienvenido`;
    }
});

const a = document.getElementById("a");
const b = document.getElementById("b");
const btnSumar = document.getElementById("btnSumar");
const resSuma = document.getElementById("resSuma");

btnSumar.addEventListener("click", () => {
    const n1 = Number(a.value);
    const n2 = Number(b.value);
    resSuma.innerText = `Resultado: ${n1+n2}`;
});

const form = document.getElementById("calc");
const x = document.getElementById("x");
const y = document.getElementById("y");
const opc = document.getElementById("opc");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nx = Number(x.value);
    const ny = Number(y.value);
    let r;

    switch(opc.value){
        case "+": 
            r = nx + ny;
            break;
        case "-": 
            r = nx - ny;
            break;
        case "/":
            r = nx / ny;
            break;
        case "*":
            r = nx * ny;
            break;
    }

    result.innerText = `Total = ${r}`;

});

const nom = document.getElementById("nom");
const age = document.getElementById("age");
const btnInfo = document.getElementById("btnInfo");
const salida2 = document.getElementById("salida2");

btnInfo.addEventListener("click", () => {
    const n = nom.value.trim();
    const e = Number(age.value);

    if (!n) {
        salida2.innerText = "Escriba un nombre";
        return;
    }

    if (age.value.trim() === "" || Number.isNaN(e)) { 
        salida2.innerText = "Escriba un numero valido";
        return;
    }

    let texto = `Hola ${n}. Tienes ${e} años.`;
    if (e < 18) {
        texto += `\n Eres menor de edad`;
    } else if (e >= 18){
        texto += `\n Eres mayor de edad`;
    }

    salida2.innerText = texto;
});

const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const btnSum = document.getElementById("btnSum");
const resutadoo = document.getElementById("resultadoo")

btnSum.addEventListener("click", () => {
    let n = 0
    while(n !== 30){
        alert("Esto es un virus");
        n += 1;
    }
    /*const n = Number(n1.value);
    const m = Number(n2.value);
    resutadoo.innerText = `${n+m}`;
    */
});
