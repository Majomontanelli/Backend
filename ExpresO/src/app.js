import express from 'express';
import ProductManager from './ProductManager';

const app= express();

//Creo instancia
const productManager= new ProductManager('./productos.json');

app.use(express.urlencoded({extended: true}));

//llamar al metodo getProduct
app.get('/productos', async (req, res) =>{
    const products= await productManager.getProduct();
    res.send(products);
})

//Llamar al metodo getProductById
app.get('/id', async (req, res) =>{
    const ids= await productManager.getProductById();
    res.send(ids);
})

//Escuchar puerto
app.listen(8080, () => console.log("Listening on port 8080"));