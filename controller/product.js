const { Products } = require('../models')

async function createProduct(req, res){
	const productData = req.body;
	
	if(!(productData.name && productData.cost && productData.quantity)){
		res.status(400).send({msg : 'Name, Cost & Quantity is missing'})
	}

	try{
		const name = productData.name;
		const description = productData.description;
		const cost = productData.cost;
		const quantity = productData.quantity;
		
		const result = await Products.create({name, description, cost, quantity});
		res.send({msg: 'Product got created',result})
	}catch(err){
		res.status(500).send({msg: 'Internal server error',err})
	}
}


module.exports = {
	createProduct
}