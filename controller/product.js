const { Products } = require('../models')

async function createProduct(req, res){
	const productData = req.body;

	try{
		const name = productData.name;
		const description = productData.description;
		const cost = productData.cost;
		const quantity = productData.quantity;
		const CategoryId = productData.CategoryId

		const result = await Products.create({name, description, cost, quantity, CategoryId});
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

async function updateProduct(req,res){
	const productData = req.body;
	const productId = req.params.id;
	
	if(!(productData.name && productData.cost && productData.quantity && productData.description)){
		res.status(400).send({msg : 'Name, Cost, Quantity & description is missing'})
	}

	try{
		const name = productData.name;
		const description = productData.description;
		const cost = productData.cost;
		const quantity = productData.quantity;

		const product = await Products.findOne({
			where:{id : productId}
		})

		if(product){
			product.name = name;
			product.cost = cost;
			product.description = description;
			product.quantity = quantity;

			product.save()

			res.send({msg : 'product got updated successfully'})
		}else{
			res.status(400).send({msg : 'product id does not exist'})
		}



	}catch(err){
		console.log('err',err)
		res.status(500).send({msg: 'Internal server error',err})
	}


}

async function deleteProduct(req,res){
	const productId = req.params.id;
	try{
		await Products.destroy({
			where: {id:productId}
		})

		res.send({msg: "product delete successfully"})
	}catch(err){
		res.status(500).send({msg: 'Internal server error',err})
	}
}

module.exports = {
	createProduct,
	getAllProduct,
	getProductOnId,
	deleteProduct,
	updateProduct
}