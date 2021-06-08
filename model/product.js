const fs = require('fs');
const path = require('path');
const modelPath = require('../utilties/path');
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {                 // store items in product array
        const p = path.join(modelPath, 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            let product = [];
            if (!err) {
                product = JSON.parse(fileContent);
            }
            fs.writeFile(p, JSON.stringify(product), err => {
                console.log(err);
            });
        });
    }

    static fetchAll() {
        const p = path.join(modelPath, 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return [];
            }
            return JSON.parse(fileContent);
        });
    }
}
