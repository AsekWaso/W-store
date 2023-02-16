const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.getProducts()
    .then(products => {
      res.render('product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};