const {User, Role, Sequelize} = require('../models')

async function checkDuplicateUsernameAndEmail(req,res,next){
	if(req.body.username){
		const user = await User.findOne({
			where : {
				username:req.body.username
			}
		})

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
		const findRoleFromDB = await Role.findAll({
			attributes:['id']
		});

		if(findRoleFromDB.length > 0){
			const storeRoles = []

			for(let i = 0 ; i<findRoleFromDB.length; i++){
				storeRoles.push(findRoleFromDB[i].dataValues.id)
			}
			for(let i = 0; i< roles.length;i++){
				const result = storeRoles.includes(roles[i])
				if(!result){
					flag = false
					break;
				}
			}
			if(flag){
				next()
			}else{
				res.status(400).send({msg :'Role id does not exist'})
				return;
			}
		}else{
			res.status(500).send({msg: 'Internal server error, Role does not found'});
			return;
		}
	}
	else{
		next()
	}
}


module.exports = {checkDuplicateUsernameAndEmail,checkRoles}