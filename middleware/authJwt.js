const jwt = require('jsonwebtoken');
const {User} = require('../models')
async function verifyToken(req,res,next){
	const token = req.headers['x-access-token'];

	if(token){
		try{
			const result = await jwt.verify(token, 'helloIamsecretkey')
			if(result){
				req.userId = result.id;
				next()
			}else{
				res.status(400).send({msg : 'auth token has expired. Please relogin'})
				return;
			}
		}catch(err){
			res.status(400).send({msg : 'auth token has expired. Please relogin'})
			return;	
		}
	}else{
		res.status(401).send({msg : 'auth token is missing'})
		return;
	}
}

async function isAdmin(req,res,next){
	const userId = req.userId;

	try{
		const user = await User.findByPk(userId);
		const userRoles =  await user.getRoles();
		for(let i = 0; i< userRoles.length; i++){
			if(userRoles[i].dataValues.name === 'Admin'){
				next()
				return;
			}
		}
		res.status(400).send({msg : 'User does not have admin access'})
		return;
	}catch(err){
		res.status(500).send({msg:'Internal Server error', err});
		return;
	}
}

module.exports = {verifyToken, isAdmin}