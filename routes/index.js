const express = require('express')
const {getAllUsers, createUser, updateUser} = require('../controller')

const routes = express.Router()


routes.post('/createUser', createUser)

routes.get('/getUsers', getAllUsers)

routes.put('/updateUser', updateUser)

module.exports = routes