const path = require('path');
// const routerPath = require('../utilties/path');   // without controller
const express = require('express');
const router = express.Router();
const adminRt = require('./admin');
const productsController = require('../controllers/products');

// router.get('/', (req, res, next) => {
//     res.sendFile(path.join(routerPath, 'views', 'shop.html'));
// });




// without controller

// router.get('/', (req, res, next) => {
//     const product = adminRt.product;
//     res.render('index.ejs', { prods: product, title: "Home" });    // render shop.ejs page 
// })





// with controller

router.get('/', productsController.getProduct);

module.exports = router;