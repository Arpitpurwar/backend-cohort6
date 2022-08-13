const express = require('express')
const routes = express.Router()
const { signUp } = require('../controller/auth')
const {checkDuplicateUsernameAndEmail, checkRoles} = require('../middleware')

routes.post('/ecomm/api/v1/auth/signup',[checkDuplicateUsernameAndEmail, checkRoles],
signUp)

module.exports = {authRoutes : routes}