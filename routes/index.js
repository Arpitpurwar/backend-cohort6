const { categoryRoutes } = require('./category')
const { productRoutes }= require('./product')
const { authRoutes } = require('./auth')
const {cartRoutes} = require('./cart')

module.exports = {
	categoryRoutes,
	productRoutes,
	authRoutes,
	cartRoutes
}