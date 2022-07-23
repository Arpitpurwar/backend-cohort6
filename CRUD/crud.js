const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let userDataArray = [{name : 'Rohan', id: 1, place : 'Delhi'},
{name : 'Raju', id : 2, place: 'Kanpur'}]

app.get('/getUsers', function(req,res){
	res.send(userDataArray)
})

app.post('/createUser', validateUserData, function(req,res){
	const userData = req.body;
	console.log('userDataBody', userData)
	userDataArray.push(userData)

	console.log('UserdataArray', userDataArray )

	res.send({msg : 'Data is added succesfully'})
})

function validateUserData(req,res,next){
	const userData = req.body;	
	if(userData.name && userData.id && userData.place){
		next()
	}else{
		res.status(400).send({'err': 'Userdata is missing'})
	}

}

app.put('/updateUser', function(req,res){
	const userData = req.body;
	if(userData.id){
		const index = userDataArray.findIndex(items => items.id === userData.id)
		if(userData.name){
					userDataArray[index]['name'] = userData.name
		}else if(userData.place){
			userDataArray[index]['place'] = userData.place
		}
		res.send({msg : 'Updated succesfully'})
	}else{
		res.status(400).send({'err' : 'User Id is missing'})
	}

})

app.delete('/deleteUser', function(req,res){
	const userData = req.body;
	userDataArray = userDataArray.filter(items => items.id !== userData.id)

	res.send({'msg': 'deletion successfully'})
})


app.listen(2500, function(){
	console.log('server is running on http://localhost:2500')
})