const express = require('express')
const {createCategory} = require('../controller/category')

const routes = express.Router()


routes.post('/ecomm/api/v1/categories',createCategory)

routes.get('/ecomm/api/v1/categories')

routes.put('/ecomm/api/v1/categories/:id')

module.exports = routes