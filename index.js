const {serverPort} = require('./config/server.config')
const express = require('express')
const { Categories, sequelize } = require('./models')
const {categoryRoutes, productRoutes} = require('./routes')
const app = express()

app.use(express.json())
app.use(categoryRoutes)
app.use(productRoutes)

app.listen(serverPort, async ()=> {
	console.log('server is running on this port', serverPort)
	await init()
})

async function init(){
	try{
		await sequelize.sync({force:true})

		const defaultCategories = [
		{
			name : 'Mobile',
			description: 'About Mobile'
		},
		{
			name: 'Washing Machine',
			description: 'About Washing Machine'
		}
		]

		const result = await Categories.bulkCreate(defaultCategories)
		console.log(result)
	}
	catch(err){
		console.log(err)
	}

}
