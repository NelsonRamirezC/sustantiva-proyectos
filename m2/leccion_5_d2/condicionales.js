// let edad = prompt("Ingrese su edad:");

// if(edad >=18){
//     console.log("Permitido el ingreso");
// }else {
//     console.log("Acceso negado!");
// }


let puntajeRsh = prompt("Ingrese el puntaje del hogar:");

let cesante = prompt("Está cesante, ingrese [si - no]");


if(cesante == "si"){
    cesante = true;
}else {
    cesante = false;
}


if(puntajeRsh >=10 && puntajeRsh <=100){
    asignacionBeca(puntajeRsh, cesante);
}else {
    console.log("Debe ingresar una opción válida.");
}

function asignacionBeca(puntaje, cesante){
    if(puntaje >= 90){
        if(cesante){
            console.log("Usted tiene una beca del 20%");
        }else{
            console.log("Usted tiene una beca del 10%");
        }
    }else if(puntaje>=70){
        console.log("Usted tiene una beca del 30%");
    }else if(puntaje>=40){
        console.log("Usted tiene una beca del 50%");
    }else{
        console.log("Usted tiene una beca del 100%");
    }
}
