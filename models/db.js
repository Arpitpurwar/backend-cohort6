const mysql = require('mysql2')

const {HOST, USER, DB} = require('../configs/db.config')

const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  database: DB
});
