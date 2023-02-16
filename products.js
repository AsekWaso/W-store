// Require the Product model
const Product = require('./models/product');

// Create an array of sample products
const products = [
  new Product({
    name: 'Huawei Freebuds 5i White ANC',
    price: 199.99,
    image: '/images/product1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    
  }),
  new Product({
    name: 'Silver Monkey Charger 130W',
    price: 79.99,
    image: '/images/product2.png',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }),
  new Product({
    name: 'AMD Ryzen 5 5600X',
    price: 749.99,
    image: '/images/product3.png',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  new Product({
    name: 'Samsung S23',
    price: 4999.99,
    image: '/images/product4.png',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  new Product({
    name: 'IdeaPad Gaming 3',
    price: 3399.99,
    image: '/images/product5.png',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  new Product({
    name: 'SAMSUNG 980 1TB',
    price: 389.99,
    image: '/images/product6.png',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  new Product({
    name: 'APPLE AirPods Pro II',
    price: 1389.99,
    image: '/images/product7.png',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  new Product({
    name: 'JBL Słuchawki',
    price: 650.99,
    image: '/images/product8.png',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  new Product({
    name: 'CANON EOS 2000D',
    price: 2499.99,
    image: '/images/product9.png',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  new Product({
    name: 'HUAWEI Watch GT 3',
    price: 650.99,
    image: '/images/product10.png',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })
];

exports.products = products;