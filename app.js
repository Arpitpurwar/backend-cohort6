const express = require('express')
const { User, Post} = require('./models')
const app = express()


app.listen(5000, async ()=> {
	console.log('server is running on port:5000')
	await User.sync({force: true})
	await Post.sync({force: true})
})