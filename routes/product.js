const express = require('express')
const {createProduct, getAllProduct} = require('../controller/product')

const routes = express.Router()

routes.post('/ecomm/api/v1/products', createProduct)

routes.get('/ecomm/api/v1/products', getAllProduct)

module.exports = {productRoutes: routes}