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

function bringCake(){}
function bringFries(){}
function serveDrink(){}

function preparePromise(){
	return new Promise((resolve, reject) => {
		bringCake()
		bringFries()
		serveDrink()
	})
}

Promise.all([bringCake,bringFries,serveDrink ])
.then((cake, ries, drinks ))



cakePromise('vanilla').then(data => console.log(data))
.catch(err => console.log(err))