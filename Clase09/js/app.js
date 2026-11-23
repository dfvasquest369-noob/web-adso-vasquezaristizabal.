/*
// Definimos los datos del problema
const ahorroSemanal = 20000;
const numeroSemanas = 6;

// Calculamos el total
const totalAhorrado = ahorroSemanal * numeroSemanas;

// Mostramos el resultado en consola
console.log("El total ahorrado es: " + totalAhorrado); // Salida: 120000


const cantidad=document.getElementById("cantidad");
const crear=document.getElementById("crear");
const lista=document.getElementById("lista");

crear.addEventListener("click",function(){
    let limite=Number(cantidad.value);
    let contenido="";
    for(let i=1;i<=limite;i++){
        contenido+=
        "<p>Registro#"+i+"</p>"
    }
    lista.innerHTML=contenido;
});
*/

const producto=document.getElementById("producto");
const lotes=document.getElementById("lotes");
const botonSimular=document.getElementById("simular");
const resumen=document.getElementById("resumen");
const detalle=document.getElementById("detalle");

botonSimular.addEventListener("click",function(){
    let tipoProducto=producto.value;
    let cantidadLotes=Number(lotes.value);

    if (tipoProducto === "" || cantidadLotes <= 0) {
    resumen.textContent = "Ingrese datos válidos.";
    detalle.innerHTML = "";
    return;
    }

let unidadesPorLote=0;
let nombreProducto="";
switch(tipoProducto){
    case "a":
    unidadesPorLote=12;
    nombreProducto="Producto A";
    break;

    case "b":
    unidadesPorLote=20;
    nombreProducto="Producto B";
    break;

    case "c":
    unidadesPorLote=8;
    nombreProducto="Producto C";
    break;
}

let contenido="";
let totalUnidades=0;

for(let i=1;i<=cantidadLotes;i++){
    totalUnidades+=unidadesPorLote;
    contenido+=
    "<p>Lote "+i+" | "+nombreProducto+" | "+unidadesPorLote+
    " Unidades | Acumulado: "+totalUnidades+"</p>";
}
resumen.textContent=
nombreProducto+
" | Lotes: " + cantidadLotes + " | Total: " + totalUnidades + " unidades";

detalle.innerHTML=contenido;
});


