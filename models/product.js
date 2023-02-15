const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true,
        unique: false
    },
    Title: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: false
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;