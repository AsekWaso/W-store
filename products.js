// Require the Product model
const Product = require('./models/product');

// Create an array of sample products
const products = [
  new Product({
    name: 'Product 1',
    price: 10,
    image: '/images/product1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    
  }),
  new Product({
    name: 'Product 2',
    price: 20,
    image: '/images/product1.png',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }),
  new Product({
    name: 'Product 3',
    price: 30,
    image: '/images/product1.png',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })
];

// Save the products to the database
products.forEach(product => {
  product.save((err, result) => {
    if (err) {
      console.log(err);
    }
    console.log('Product saved to database!');
  });
});
