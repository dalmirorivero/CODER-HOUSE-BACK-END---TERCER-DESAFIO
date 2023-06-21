import express, { request } from 'express';
import ProductManager from '../products/productManager.js';

const app = express ();

const manager = new ProductManager ('./files/productos.json');

// localhost:8080 (Ruta raiz para comprobar que funciona el servidor)

app.get('/', (req, res)=>{
    res.send('Server up and running :D')
});

// localhost:8080/products (Devuelve los productos dentro de un objeto)

app.get('/products', async (req, res) => {
    const products = await manager.getProducts();
    const limit = req.query.limit;
  
    if (limit !== undefined) {
      const limitedProducts = products.slice(0, parseInt(limit));
      res.send({ products: limitedProducts });
    } else {
      res.send({ products });
    }
  });

//localhost:8080/products/:id (Devuelve los productos filtrados por id)

  app.get('/products/:id', async (req,res)=>{
    
    const productid = Number(req.params.id)
    const product = await manager.getProductById(productid);
    if (!product){
        res.send({Error: 'ID Inexistente!'});
    }else {
    res.send(product);}
  })

app.listen(8080, ()=> console.log('Server running on port 8080'));