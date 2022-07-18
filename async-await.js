const getFries = () => {
	return new Promise(resolve => 
		{
			setTimeout(function(){
				resolve('getFries()')
			}, 2000)
		})
}

const getCakes = () => {
	return new Promise((resolve, reject) => 
		{
			setTimeout(function(){
				resolve('getCakes()')
			}, 3000)
		})
}

const getDrink = () => {
	return new Promise((resolve,reject) => 
		{
			setTimeout(function(){
				reject(new Error("Whoops!"))
			}, 4000)
		})
}


async function startParty(){
	try{
	const fries =  await getFries()
	const cakes = await getCakes()
	const drink = await getDrink().catch(err => console.log(err))
	return {fries, cakes, drink}
	}catch(err){
		console.log("startParty",err)
		throw err
	}
}

startParty().then(data => console.log("hey",data) )
.catch(err => console.log("catchd it properly",err))