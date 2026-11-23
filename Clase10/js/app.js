/*function calcularDiametro(radio){
    let diametro = (radio*2);
    console.log(`El diametro del circulo con radio ${radio} es ${diametro}`);
}
let radio = number(prompt("Escribe el radio:"))

calcularDiametro(radio);

Area = (base * altura) /2;


function areaTriangulo (base, altura){
    let area = (base * altura) / 2;
    return area;

}

let area = Number(prompt(`Ingrese su area: `));
let Base = Number(prompt("Ingrese su base: "));
let resultado = areaTriangulo;

console.log(`el area de su triangulo es ${areaTriangulo}`);

function convertirKgALibras(kg){
    return kg * 2.20462;
}

const peso = document.getAnimations("calcular")
const boton = document.getElementById("peso")

const resultado = document.getElementById("resultado");

boton.addEventListener("click",function(){

    resultado.textContent="";

    let kg = Number(entrada.value);
    let libras = convertirKgALibras(kg);

    resultado.textContent = "Equivalente: " + libras + "lb";

});

function calcularDescuento(precio,porcentaje){

    return precio* (1- (porcentaje/100));

}

const precio = document.getElementById("precio");
const porcentaje = document.getElementById("porcentaje");
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click",function(){

    resultado.textContent= `El precio final del producto es
    ${calcularDescuento(Number(precio.value), 
    Number(porcentaje.value))}`;

});


let ciudades=[
    "Medellin",
    "Bogota",
    "Cali"
];


console.log(ciudades[3]);
console.log(ciudades[-1]);


let nombres=[
    "Cristian",
    "Dilan",
    "Erick"
];

const agregar=nombres.push("Acosta");
const agregarInicio=nombres.unshift("Perez");
const eliminarUltimo=nombres.pop("")

console.log(nombres)


let frutas=[
    "Manzana",
    "Pera",
    "Uva",
    "Mango"
];

frutas.splice(
    1,
    0,
    "Pera"
);

console.log(frutas);

let numeros=[
    10,
    20,
    30,
    40,
    50
];

let seleccion=
numeros.slice(1,4);

console.log(seleccion);

let grupoA=[
    "Ana",
    "Luis"
];

let grupoB=[
    "Carolina",
    "Mateo"
];

let todos=
grupoA.concat(grupoB);

console.log(todos);

let categorias=[
    "Software",
    "Hardware",
    "Redes"
];

let texto=
categorias.join(" | ");

console.log(texto);

const productos = [];

const formulario = document.getElementById("formulario");
const producto = document.getElementById("producto");
const lista = document.getElementById("lista");
const eliminar = document.getElementById("eliminar");
const total = document.getElementById("total");

function actualizarLista() {
    lista.textContent = "";

    for (const nombreProducto of productos) {
        const elemento = document.createElement("li");
        elemento.textContent = nombreProducto;
        lista.appendChild(elemento);
    }

    total.textContent = `Cantidad total de productos: ${productos.length}`;
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nuevoProducto = producto.value.trim();

    if (nuevoProducto === "") {
        return;
    }

    productos.push(nuevoProducto);
    actualizarLista();
    producto.value = "";
});

eliminar.addEventListener("click", function () {
    if (productos.length > 0) {
        productos.shift();
        actualizarLista();
    }
});
*/