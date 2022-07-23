const express = require('express');
const fs = require('fs')
const path = require('path')

const app = express()

app.use(function(req,res,next){
	console.log('URL coming from request/client')
	console.log(req.url)
	next()
})

app.use(function(req,res,next){
	const filePath = path.join(__dirname,req.url)
	fs.stat(filePath,function(err, fileInfo){
		if(err){
			console.log('err while checking about file', err)
			next()
			return
		}

		if(fileInfo.isFile()){
			res.sendFile(filePath)
		}else{
			next()
		}

	})


})

app.use(function(req,res,next){
	console.log('Invalid URL/ missing files')
	
	res.status(400).send('Invalid URl from client side')
})



app.listen(3000, function(){
	console.log('Our server is running on this URL http://localhost:3000')
})