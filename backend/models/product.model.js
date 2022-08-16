//Importación de MongoDB
const mongoose = require('mongoose');

//Creación de un esquema
const ProductScheme = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is mandatory"]
    },
    price: {
        type: Number,
        required: [true, "Price is mandatory"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
});

//Definición del modelo
const Product = mongoose.model('Product', ProductScheme);
module.exports = Product;