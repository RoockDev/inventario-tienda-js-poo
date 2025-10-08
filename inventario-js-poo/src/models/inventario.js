class Inventario{
    constructor(){
       this.productos = [];
    }

    agregarProducto(producto){ 
        if (!(producto instanceof Producto)) { 
            console.error(' solo se pueden agregar instancias de productos');
            return;
        }
        this.productos.push(producto);
        console.log(Producto); //se que esto no se hace, es para pruebas
    }

    mostrarProductos(){
        if (this.productos.length === 0) {
            console.log('El inventario esta vacio');
        }else{
            this.productos.forEach(producto => {
            console.log(`nombre: ${producto.nombre}, precio: ${producto.precio}, cantidad: ${producto.cantidad}`);
        });
        }
        
    }
}