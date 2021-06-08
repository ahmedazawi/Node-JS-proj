const express = require('express');
const path = require('path');
const router = express.Router();
// const routerPath = require('../utilties/path');    // without controller
const productsController = require('../controllers/products');


// router.get('/add-product', (req, res, next) => {
//     // console.log("in the middleware");
//     res.sendFile(path.join(routerPath, 'views', 'add-product.html'));

// });


// without controller
// const product = [];

// without controller

// router.get('/add-product', (req, res, next) => {
//     // console.log("in the middleware");
//     res.render('add-product', { title: 'Add Product' });

// });


// without controller

// router.post('/add-product', (req, res, next) => {
//     product.push({ title: req.body.title });
//     res.redirect('/');
// });


// without controller
// exports.routes = router;
// exports.product = product;









// with controller

router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postProduct);

module.exports = router;