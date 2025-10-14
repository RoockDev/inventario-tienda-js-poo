import { Producto } from './producto.js';

export class Inventario {
  constructor() {
    this.productos = [];
    const productosGuardados = localStorage.getItem('productos');

    if (productosGuardados) {
      const productosArray = JSON.parse(productosGuardados);

      this.productos = productosArray.map(producto => new Producto(producto.nombre,producto.precio,producto.cantidad));
    }
  }

  agregarProducto(producto) {
    if (!(producto instanceof Producto)) {
      console.error(" solo se pueden agregar instancias de productos");
      return;
    }
    this.productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(this.productos));
    console.log(`producto añadido: ${producto.nombre}`); //se que esto no se hace, es para pruebas
  }

  mostrarProductos() {
    if (this.productos.length === 0) {
      console.log("El inventario esta vacio");
    } else {
      this.productos.forEach((producto) => {
        console.log(
          `producto : nombre: ${producto.nombre}, precio: ${producto.precio}, cantidad: ${producto.cantidad}`
        );
      });
    }
  }

  calcularValorTotal() {
    let valorTotal = 0;
    if (this.productos.length !== 0) {
      this.productos.forEach((producto) => {
        valorTotal += producto.precio * producto.cantidad;
      });
    }

    return valorTotal;
  }

  eliminarProducto(nombre){
    //verificamos si hay algun producto en la lista con este nombre
    const existe = this.productos.some(producto => producto.nombre === nombre);
    if (!existe) {
        console.log(`no hay ningun producto con el nombre ${nombre}`);
    } else {
        /**
         * filtramos por productos con nombre distintos para eliminar
         * me gusta mas hacer esto asi que con .remove etc...
         */
        this.productos = this.productos.filter(producto => producto.nombre !== nombre ); 
        localStorage.setItem('productos',JSON.stringify(this.productos));
        console.log(`producto/s con nombre:  ${nombre} eliminado/s`);
    }
  }

  aplicarDescuento(descuento){
    if (descuento<= 0 && descuento >= 100) {
        console.log(' el descuento debe ser mayor que 0 y menor que 100');
    }else{
        this.productos.forEach(producto => {
            producto.precio = producto.precio * (1-descuento / 100);
        });
        localStorage.setItem('productos',JSON.stringify(this.productos));
    }

    console.log(`se le aplica un descuento del ${descuento}%`);
  }
}
