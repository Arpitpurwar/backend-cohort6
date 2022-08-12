async function checkNameForCategory(req,res,next){
	const categoryData = req.body;

	if(!categoryData.name){
		res.status(400).send({msg: 'name is mandatory'})
		return;
	}
	next()
}

module.exports = { checkNameForCategory }