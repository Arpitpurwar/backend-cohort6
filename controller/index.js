const { User } = require('../models')

async function createUser(req,res){

	const {name,email, age, role} = req.body;
	try{
		const users = await User.create({name,email,age, role});
		res.send(users)
	}catch(err){
		console.log('err', err)
		res.status(500).send({err : 'data creation failer'})
	}
}

async function getAllUsers(req,res){

	try{
		const users = await User.findAll();
		res.render('user',{users})
	}catch(err){
		console.log('err', err)
		res.status(500).send({err : 'fetch error'})
	}
}

module.exports = { getAllUsers, createUser }