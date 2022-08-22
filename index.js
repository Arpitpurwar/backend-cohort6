const {serverPort} = require('./config/server.config')
const express = require('express')
const { Categories, sequelize, Products, Role } = require('./models')
const {categoryRoutes, productRoutes, authRoutes, cartRoutes} = require('./routes')
const app = express()

app.use(express.json())
app.use(authRoutes)
app.use(categoryRoutes)
app.use(productRoutes)
app.use(cartRoutes)

app.listen(serverPort, async ()=> {
	console.log('server is running on this port', serverPort)
	await init()
})

async function init(){
	try{
		await sequelize.sync({force: true})

		const defaultProducts = [
		{
		    "description":"Nyka best products",
		    "name" :"MakeUP Kit",
		    "cost": 870,
		    "quantity": 20,
			"CategoryId": 1
		},
		{
    		"description":"Best fragnance",
		    "name" :"Fogg",
		    "cost": 280,
		    "quantity": 20,
			"CategoryId": 2
		},
		{
    		"description":"Best for summer holidays",
		    "name" :"Summer Clothes",
		    "cost": 1200,
		    "quantity": 20,
			"CategoryId": 3
		}
]

		const defaultCategories = [
		{
			name : 'Beauty',
			description: 'All beauty Products'
		},
		{
			name: 'Fragnance',
			description: 'All Fragnance Products'
		},
		{
			name: 'Clothes',
			description: 'All types of Clothes'
		}
		]

		const defaultRoles = [
		{
			name : 'User'
		},
		{
			name: 'Admin',
		}
		]
		await Categories.bulkCreate(defaultCategories)
		await Products.bulkCreate(defaultProducts)
		await Role.bulkCreate(defaultRoles)
	}
	catch(err){
		console.log(err)
	}

}
