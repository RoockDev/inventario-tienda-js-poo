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
}