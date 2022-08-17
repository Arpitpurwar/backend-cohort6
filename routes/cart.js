const express = require('express')
const {updateCart, getCart} = require('../controller/cart')

const routes = express.Router()



routes.put('/ecomm/api/v1/carts/:id', updateCart)

routes.get('/ecomm/api/v1/carts/:id', getCart)

module.exports = {cartRoutes : routes}