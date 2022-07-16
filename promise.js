const cakePromise = function(cakeType){
	 return new Promise(function(resolve,reject){
		if(cakeType === 'strawberry'){
			resolve('thanks Rohan for bringing cake')
		}
		else{
			reject('Damn! Rohan, I have to go and bring now')
		}
		})
}


cakePromise('vanilla').then(function(data){
	console.log('data', data)
}).catch(function(err){
	console.log(err)
})