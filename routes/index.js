const express = require('express')
const {getAllUsers, createUser} = require('../controller')

const routes = express.Router()


routes.post('/createUser', createUser)

routes.get('/getUsers', getAllUsers)

module.exports = routes