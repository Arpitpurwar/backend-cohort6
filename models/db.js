const mysql = require('mysql2')

const {HOST, USER, DB, PASSWORD} = require('../configs/db.config')

const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  database: DB,
  password: PASSWORD
});


// connection.query(
// 	'select * from Users',
// 	function(err, result){
// 		console.log('result', result)
// 	}
// )

const userInsertQuery = ` Insert into Users
(name, age, role, email, createdAt, updatedAt)
values(?,?,?,?,?,?)
 `
const userInsertData = ['Ankit', 24, 'Developer', 'ankit@gmail.com',
 '2022-08-01 17:04:49','2022-08-01 17:04:49']
connection.query(userInsertQuery, userInsertData, function(err, data){
	if(err){
		console.log(err)
	}
	console.log(data)
})
