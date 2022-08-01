const express = require('express')
const { sequelize } = require('./models')
const app = express()

const routes = require('./routes')

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json())
app.use(routes)

app.listen(5000, async ()=> {
	console.log('server is running on port:5000')
	await sequelize.authenticate();
})