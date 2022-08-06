const express = require('express')
const {createCategory, getAllCategory} = require('../controller/category')

const routes = express.Router()


routes.post('/ecomm/api/v1/categories',createCategory)

routes.get('/ecomm/api/v1/categories',getAllCategory)

routes.put('/ecomm/api/v1/categories/:id')

module.exports = routes