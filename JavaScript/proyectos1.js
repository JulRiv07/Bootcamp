
function Calculadora(a, b){
    const op = prompt("Ingrese la operacion que desea realizar (+, -, /, *): ");

    let r;
    if (op === "+") r = a + b ;
    else if(op === "-") r = a - b;
    else if(op === "/") r = a / b;
    else if(op === "*") r = a * b;
    else r = "Invalido"; 

    return r;
}

function Adivinar(){
    const secreto = Math.floor(Math.random() * 10) + 1;
    let intento;
    let cuenta = 0;

    do{
        intento = Number(prompt("Adivina (1-10): "));
        cuenta++;
        if(intento > secreto ) alert("Muy alto");
        else if(intento < secreto) alert("Muy bajo");
    } while(intento !== secreto);

    alert(`¡Acertaste en ${cuenta} intentos`);
}

function Lista_compras(){
    const compras = [];
    let opc;

    do{
        opc = prompt("a) Agregar \n b) Ver \n c) Quitar \n d) Salir \n Que opcion desea: ");
        switch(opc){
            case "a":
                break;
            case "b":
                break;
            case "c":
                break;
            case "d": alert("¡Chao!");
                break;
            default: alert("Opcion invalida");
                break;
        }
    } while(opc !== "d");
}

function main(){
    console.log("Bienvenido");
    console.log("1. Calculadora \n2. Random \n3. Lista de compras ");
    const opc = Number(prompt("Que opcion deseas: ")); 
    switch(opc){
        case 1: 
            const x = Number(prompt("Ingrese un numero: "));
            const y = Number(prompt("Ingrese otro numero: "));
            console.log("El resultado calculado es: " + Calculadora(x, y));
            break;
        case 2:
            Adivinar(); 
            break;
        case 3:
            Lista_compras();
            break;
        default: console.log("Opcion no valida");
                break;
    }
    
}

main();