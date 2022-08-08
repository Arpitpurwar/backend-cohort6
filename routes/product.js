const express = require('express')
const {createProduct} = require('../controller/product')

const routes = express.Router()

routes.post('/ecomm/api/v1/products', createProduct)

module.exports = {productRoutes: routes}