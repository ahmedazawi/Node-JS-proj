const Product = require('../model/product');

// admin.js controller
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { title: 'Add Product' });
}

exports.postProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};


// shop.js controller 
exports.getProduct = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('index.ejs', { prods: products, title: "Home" });
}


