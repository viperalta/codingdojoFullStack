const ProductController = require('../controllers/product.controller')

module.exports = function(app){
    app.post('/api/product/add',ProductController.createProduct)
    app.get('/api/products/',ProductController.getAll)
    app.get('/api/product/:id', ProductController.getProduct);

}