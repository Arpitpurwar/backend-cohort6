const express = require('express')
const {createProduct, getAllProduct, getProductOnId, updateProduct, deleteProduct } = require('../controller/product')

const { validateProductData } = require('../middleware')
const routes = express.Router()

routes.post('/ecomm/api/v1/products',[validateProductData], createProduct)

routes.get('/ecomm/api/v1/products', getAllProduct)

routes.get('/ecomm/api/v1/products/:id', getProductOnId)

routes.put('/ecomm/api/v1/products/:id', updateProduct)

routes.delete('/ecomm/api/v1/products/:id', deleteProduct)
module.exports = {productRoutes: routes}