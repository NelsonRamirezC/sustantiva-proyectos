
const cajaContador = document.getElementById("cajaContador");
const valorContador = document.getElementById("valorContador");

// console.log("Caja Contador:", cajaContador);

// console.log("Contador:", valorContador);



// AGREGAR EVENTO CLICK QUE PERMITA AUMENTAR EL CONTADOR

let contador = 0;

cajaContador.addEventListener("click", (event) => {
    
    // let contenido = `<span class='fw-bold'>${++contador}</span>`;

    valorContador.innerText = ++contador;
});