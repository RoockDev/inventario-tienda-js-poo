class Inventario {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    if (!(producto instanceof Producto)) {
      console.error(" solo se pueden agregar instancias de productos");
      return;
    }
    this.productos.push(producto);
    console.log(Producto); //se que esto no se hace, es para pruebas
  }

  mostrarProductos() {
    if (this.productos.length === 0) {
      console.log("El inventario esta vacio");
    } else {
      this.productos.forEach((producto) => {
        console.log(
          `nombre: ${producto.nombre}, precio: ${producto.precio}, cantidad: ${producto.cantidad}`
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
        console.log(`producto/s con nombre:  ${nombre} eliminado/s`);
    }
  }
}
