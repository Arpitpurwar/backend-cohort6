const express = require('express')
const routes = express.Router()
const { signUp } = require('../controller/auth')

routes.post('/ecomm/api/v1/auth/signup',signUp)

module.exports = {authRoutes : routes}