const {serverPort} = require('./config/server.config')
const express = require('express')
const { Categories, sequelize } = require('./models')

const app = express()


app.listen(serverPort, async ()=> {
	console.log('server is running on this port', serverPort)
	await Categories.sync({force: true})
})

