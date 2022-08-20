const express = require('express')
const {categoryRoutes, productRoutes, authRoutes, cartRoutes} = require('./routes')
const app = express()

app.use(express.json())
app.use(authRoutes)
app.use(categoryRoutes)
app.use(productRoutes)
app.use(cartRoutes)


module.exports = {app}



