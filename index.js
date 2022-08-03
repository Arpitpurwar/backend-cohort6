const {serverPort} = require('./configs/server.config')
const express = require('express')


const app = express()


app.listen(serverPort, ()=> {
	console.log('server is running on this port', serverPort)
})

