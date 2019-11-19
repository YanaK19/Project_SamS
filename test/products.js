const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    group: String,
    name: String,
    price100gr: Number,
    kcal: Number,
    pc: Number
});

const Products = mongoose.model('products', ProductsSchema);

module.exports = Products;