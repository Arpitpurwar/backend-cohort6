const { Categories } = require('../models')

async function createCategory(req, res){
	const data = req.body;

	if(!data.name){
		res.status(400).send({msg: 'name is mandatory'})
	}

	const name = data.name;
	const description = data.description;

	try{
		const result = await Categories.create({name, description})
		console.log('result', result);
		res.send({msg : 'Category has been created'})
	}catch(err){
		console.log('err in creation of categories', err)
		res.status(500).send({msg : 'Internal server error'})
	}
	


}


module.exports = {
	createCategory
}