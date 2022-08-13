const bcrypt = require('bcryptjs')
const {User} = require('../models')

async function signUp(req,res){
	const username = req.body.username;
	const email = req.body.email;
	const password = bcrypt.hashSync(req.body.password, 8);

	console.log('password', password)

	try{
		const user = await User.create({username,email,password})
		console.log('user', user)
		if(req.body.roles){
			const roles = req.body.roles;
			const result = await user.setRoles(roles)
			console.log('user defined roles', result)

		}else{
			const result = await user.setRoles([1])
			console.log("default roles",result)
		}

		res.send({msg :'User has been created successfully'})
	}catch(err){
		res.status(500).send({msg : 'Internal Server error'})
	}


	
}


module.exports = {signUp}