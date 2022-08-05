const mysql = require('mysql2')

const {} = require('')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});
