const { User, sequelize } = require('../models')
const {Op} = require('sequelize')

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
		const users = await User.findAll({
			where: {
				[Op.or]:[
					{ name:'Rohan'},
					{role:'Manager'}
				]
			}
		});
		res.json(users)
	}catch(err){
		console.log('err', err)
		res.status(500).send({err : 'fetch error'})
	}
}

async function updateUser(req,res){
	const role = req.body.role;
	const id = req.body.id;
	try{
		const users = await User.update({role :role },{where : {
		id : id
		}});
		res.json(users)
	}catch(err){
		console.log('err', err)
		res.status(500).send({err : 'fetch error'})
	}
}


module.exports = { getAllUsers, createUser, updateUser }