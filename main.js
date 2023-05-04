function Producto (id, nombre, precio, stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

}

//PERMISO PARA INGRESAR PRODUCTOS
let nuevoProducto = prompt ("Quieres Ingresar un nuevo Producto SI/NO")

const productos = [];

while (nuevoProducto != "NO"){

//INGRESO DE PRODUCTOS Y ENVIO AL ARRAY
function crearProducto() {
const nombre = prompt("Ingrese el nombre del producto:");
const precio = parseFloat(prompt("Ingrese el precio del producto:"));
const stock = parseInt(prompt("Ingrese la cantidad de producto disponible:"));

const producto = new Producto(productos.length + 1, nombre, precio, stock);
productos.push(producto);
}

crearProducto()

//MOSTRAR PRECIOS CON IVA
nuevoProducto = prompt ("Quieres Ingresar un nuevo Producto SI/NO");
}

let preciosIva = prompt("Quieres ver los valores con iva SI/NO")

if (preciosIva != "NO"){

const iva = productos.map ((precios) => {
return {
    nombre: precios.nombre,
    precio: precios.precio * 1.19,
}
});

console.log(productos);
console.log(iva);

}else{
alert("Fin de la informacion")
}

//MUESTRA CANTIDAD DE PRODUCTOS INGRESADOS
alert("La cantidad de productos ingresados fue: " + productos.length);