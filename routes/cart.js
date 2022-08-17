const express = require('express')
const {updateCart, getCart} = require('../controller/cart')
const {verifyToken} = require('../middleware')
const routes = express.Router()



routes.put('/ecomm/api/v1/carts/:id',[verifyToken], updateCart)

routes.get('/ecomm/api/v1/carts/:id',[verifyToken], getCart)

module.exports = {cartRoutes : routes}