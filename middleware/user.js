const {User, Role} = require('../models')

async function checkDuplicateUsernameAndEmail(req,res,next){
	if(req.body.username){
		const user = await User.findOne({
			where : {
				username:req.body.username
			}
		})
		console.log('user_+++++=>>>', user)
		if(user){
			res.status(400).send({msg : 'Username already exist'})
			return;
		}
	} 

	if(req.body.email){
		const user = await User.findOne({
			where : {
				email:req.body.email
			}
		})

		if(user){
			res.status(400).send({msg : 'email already exist'})
			return;
		}
	}

	next()

}

async function checkRoles(req,res,next){
	if(req.body.roles){
		let roles = req.body.roles;
		let flag = true;
		const savedRoles = await Role.findAll();
		console.log('saveroles', savedRoles)
		for(let i = 0 ; i<=savedRoles.length; i++){
			for(let j = 0; j<=roles.length;j++){
				if(roles[j] !== savedRoles[i].dataValues.id){
					flag = false
				}
			}
		}

		if(flag){
			next()
		}else{
			res.status(400).send({msg :'Role id does not exist'})
			return;
		}
	}

	res.send({'msg': 'heyy role'})
	return;
}
module.exports = {checkDuplicateUsernameAndEmail,checkRoles}