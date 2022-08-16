//Llamada al controlador
const ProductController = require('../controllers/product.controller');

//Creación de las rutas de acuerdo a los métodos del controlador
module.exports = function(app){
    app.post('/api/product/new', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id/', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}