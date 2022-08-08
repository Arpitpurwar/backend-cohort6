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

async function getAllProduct(req,res){
	try{
		const result = await Products.findAll();
		res.send(result)
	}catch(err){
		res.status(500).send({msg: 'Internal server error',err})
	}
}

async function getProductOnId(req,res){

	const productId = req.params.id;
	try{
		const result = await Products.findOne({
			where : {
				id: productId
			}
		});
		res.send(result)
	}catch(err){
		res.status(500).send({msg: 'Internal server error',err})
	}
}

async function updateProduct(req,res){}

async function deleteProduct(req,res){}

module.exports = {
	createProduct,
	getAllProduct,
	getProductOnId,
	deleteProduct,
	updateProduct
}