const httpServer = require('http');


function listener(request, response){
	response.setHeader('Content-Type', 'text/csv')
	response.setHeader("Content-Disposition", "attachment;filename=details.csv");
	
	//response.setHeader('Content-Type', 'application/json')
	//response.setHeader('Content-Type', 'text/plain')
	response.writeHead(200, {
		// 'Content-Type' : 'text/html',
		'Hello' : 'Arpit'
	})

	const body = `name,rollNumber,school\nTushar raina,34,Thapar\nArpit Purwar,43,kP`
	response.end(body)
}


const server = httpServer.createServer(listener)

server.listen(8000, function(){
	console.log('Hey I am running on this URl : http://localhost:8000')
})


