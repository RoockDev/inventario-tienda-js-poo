import { Producto } from "./models/producto";
import { Inventario } from "./models/inventario";

console.log('pruebas de inventario en tienda POO');

//creamos inventario
const inventario = new Inventario();

//creamos productos
const manzana = new Producto('Manzana', 1.2,10);
const pan = new Producto('Pan', 0.8, 5);
const leche = new Producto ('Leche', 1.5, 3);

//agregamos productos
inventario.agregarProducto(manzana);
inventario.agregarProducto(pan)
inventario.agregarProducto(leche);

//mostramos productos
inventario.mostrarProductos();

//calculamos valor total
const valorTotal = inventario.calcularValorTotal();
console.log(`el valor total de los productos es ${valorTotal}`);

//aplicamos descuentos
inventario.aplicarDescuento(10);

//eliminamos productos
inventario.eliminarProducto('Manzana');

//mostramos de nuevo
inventario.mostrarProductos();

// intentamos eliminar un producto que no existe
inventario.eliminarProducto('galletas');
