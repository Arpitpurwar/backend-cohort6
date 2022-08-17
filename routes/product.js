const express = require('express')
const {createProduct, getAllProduct,filterBasedOnProduct, getProductOnId, updateProduct, deleteProduct } = require('../controller/product')

const { validateProductData, verifyToken, isAdmin } = require('../middleware')
const routes = express.Router()

routes.post('/ecomm/api/v1/products',[validateProductData,verifyToken, isAdmin], createProduct)

routes.get('/ecomm/api/v1/products', getAllProduct)

routes.get('/ecomm/api/v1/products/filter', filterBasedOnProduct)

routes.get('/ecomm/api/v1/products/:id', getProductOnId)

routes.put('/ecomm/api/v1/products/:id',[verifyToken, isAdmin], updateProduct)

routes.delete('/ecomm/api/v1/products/:id',[verifyToken, isAdmin], deleteProduct)
module.exports = {productRoutes: routes}