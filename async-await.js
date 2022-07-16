const getFries = () => {
	return new Promise(resolve => 
		{
			setTimeout(function(){
				resolve('getFries()')
			}, 2000)
		})
}

const getCakes = () => {
	return new Promise(resolve => 
		{
			setTimeout(function(){
				resolve('getCakes()')
			}, 3000)
		})
}

const getDrink = () => {
	return new Promise(reject => 
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
	const drink = await getDrink()
	return {fries, cakes, drink}
	}catch(err){
		console.log("startParty",err)
		return err
	}

}

startParty().then(data => console.log(data) )
.catch(err => console.log(err))