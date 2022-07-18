

function getVegies(){
	return new Promise(resolve, reject => {
		setTimeout(function(){
			resolve('vegies are ready')
		},2000)
	})
}

function cutVegies(data){
		return new Promise(resolve, reject => {
		setTimeout(function(){
			resolve('final vegies are ready')
		},3000)
	})
}


makeBurger().then( data => serve(data)).catch(err => console.log('No burger'))


function serve(data){
	console.log('Burger is ready', data)
}