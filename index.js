import ProductManager from "./src/productManager.js";

const manager = new ProductManager ('./files/productos.json');

const send = async () => {
    // CREA UN NUEVO PRODUCTO ALMACENADO EN EL ARREGLO
    const product = {
    title: 'Resaltador', 
    description: 'Amarillo', 
    price: 83, 
    thumbnail: 'no img', 
    code: 'ab156', 
    stock: 23
    };
    
    await manager.addProduct(product);
   
    // DEVUELVE TODOS LOS PRODUCTOS EN FORMATO DE ARREGLO
    const products = await manager.getProducts();
    console.log(products);

    // DEVUELVE UN PRODUCTO DEL ARREGLO SELECCION POR ID
    const productbyid = await manager.getProductById(0); //remplazar 0 por el id del producto a seleccionar
    if (productbyid) {
        console.log("Producto encontrado!", productbyid)
    }

    // MODIFICA UN PRODUCTO DEL ARREGLO SELECCIONADO POR ID
    const productUpdateId = (0) ; //remplazar 0 por el id del producto a modificar
    const updateFields = {
        title: 'Goma',
        price: 20,
        stock: 40,
        description: 'gris'
    };

    const updatedProduct = await manager.updateProduct(productUpdateId, updateFields);
    if (updatedProduct) {
        console.log("Producto actualizado!", updatedProduct)}
    
    // ELIMINA UN PRODUCTO DEL ARREGLO SELECCIONADO POR ID
    const deletedProduct = await manager.deleteProductById(0); //remplazar 0 por el id del producto a eliminar
    if (deletedProduct){
    console.log("Producto eliminado correctamente!")
    }
}
send();

