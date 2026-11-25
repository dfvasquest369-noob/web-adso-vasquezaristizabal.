/*let aprendiz ={
    nombre:`laura`,
    edad:21,
    activo:true
};

let producto ={
    nombre:`monitor`,
    precio:850000,
    disponible:true
};

console.log(producto.nombre);
console.log(producto.precio);

let producto ={
    nombre:`monitor`,
    precio:850000
};

producto.marca=`LG`;
producto.stock=5;

console.log(producto)

let curso={
    nombre:`java-script`,
    duracion:8,
    modalidad:`presencial`,
    activo:true
};

console.log(curso.nombre);
console.log(curso.modalidad);
curso.duracion=20;
curso.instructor=`Deimer`;
console.log(curso)

let productos=[
    {
        nombre:`mouse`,
        precio:75000,
        stock:8
    },

    {
        nombre:`teclado`,
        precio:120000,
        stock:5
    },

    {
        nombre:`monitor`,
        precio:850000,
        stock:3
    },
];

console.log(productos[1].stock)

let nuevoProducto={
    nombre:`audifonos`,
    precio:95000,
    stock:10
};

productos.push(nuevoProducto);

productos.push({
    nombre:`camara`,
    precio:180000,
    stock:6
});

for(let i =0; i<productos.length;i++){
    console.log(`${productos[i].nombre}-
        $${productos[i].precio}-
        stock${productos[i].stock}-
        preciototal${productos[i].stock*productos[i].precio}`);
}

//Mas simplificado
productos.forEach(function(item,indice){
    console.log(`${indice}-${item.nombre}-
        $${item.precio}-
        stock${item.stock}-
        preciototal${item.stock*item.precioitem}`);
});

let numeros=[3,6,9];
let dobles=numeros.map(function(numero){
    return numero*3;
});
console.log(dobles);
console.log(productos)

let nombres=productos.map(function(producto){
    return producto.nombre;
});
console.log(nombres);
console.log(productos);

let preciosConIva=productos.map(function(producto){
    return producto.precio*1.19;
});
console.log(nombres);
console.log(productos);

let operacionesIva=productos.map(function(producto){
    let iva=producto.precio*0.19;
    let precioConIva=producto.precio+iva;
    return {
        nombre:producto.nombre,
        iva:iva,
        precioConIva:precioConIva
    };
});

console.log(operacionesIva);
*/

