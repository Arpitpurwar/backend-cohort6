if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config()
}

module.exports = {
	serverPort: process.env.PORT
}


