function sumar(num1, num2){
    resultado = num1 + num2;
    return resultado;
}

function dibujarLinea(){
    console.log("*************************************")
}

function mostrarEnConsola(mensaje){
    dibujarLinea();
    console.log(mensaje);
    dibujarLinea();
}

let num1 = 5;
let num2 = 10;

let suma1 = sumar(num1, num2);
let mensaje = `Resultado suma: ${suma1}`;

mostrarEnConsola(mensaje);
