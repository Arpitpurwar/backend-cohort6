const httpServer = require('http');


function listener(request, response){
	if(request.url === '/user'){
		response.end('Hey I am User API')
	}else if(request.url === '/address'){
		response.end('Hey I am Address API')
	}
	else{
		response.end('Hey this API does not exist')
	}
}


const server = httpServer.createServer(listener)

server.listen(8000, function(){
	console.log('Hey I am running on this URl : http://localhost:8000')
})
