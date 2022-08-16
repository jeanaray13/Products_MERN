//Obtención del modelo
const Product = require('../models/product.model');

//Crear un producto
module.exports.createProduct = (request, response) => {
    const {title,price,description} = request.body; //Obtener las variables de la solicitud
    Product.create({title, price, description})
    .then(product => response.json({insertedProduct: product, msg: 'Successful creation'}))
    .catch(err => response.status(400).json(err))
}

//Mostrar todos los productos
module.exports.getAllProducts = (_,response) => {
    Product.find({}) //Recuperar todos los productos de la consulta
    .then(products => response.json(products))
    .catch(err => response.json(err))
}

//Mostrar un producto
module.exports.getProduct = (request,response) => {
    Product.findOne({_id: request.params.id}) //Recupera un producto de la consulta de acuerdo al ID ingresado en la URL
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

//Actualizar un producto
module.exports.updateProduct = (request,response) => {
    Product.findOneAndUpdate({_id: request.params.id},request.body,{new:true}) //Actualiza un producto de la consulta de acuerdo al ID ingresado en la URL
    .then(updateProduct => response.json(updateProduct))
    .catch(err => response.json(err))
}

//Borrar un producto
module.exports.deleteProduct = (request,response) => {
    Product.deleteOne({_id: request.params.id})
    .then(deleteProduct => response.json(deleteProduct))
    .catch(err => response.json(err))
}