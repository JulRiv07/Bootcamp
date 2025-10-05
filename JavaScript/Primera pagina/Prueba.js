
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