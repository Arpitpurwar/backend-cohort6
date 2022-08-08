const express = require('express')
const {createProduct, getAllProduct, getProductOnId} = require('../controller/product')

const routes = express.Router()

routes.post('/ecomm/api/v1/products', createProduct)

routes.get('/ecomm/api/v1/products', getAllProduct)

routes.get('/ecomm/api/v1/products/:id', getProductOnId)

module.exports = {productRoutes: routes}