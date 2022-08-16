const {checkNameForCategory} = require('./category')
const { validateProductData } = require('./product')
const {checkDuplicateUsernameAndEmail, checkRoles, verifyToken} = require('./user')

module.exports = {
	checkNameForCategory,
	validateProductData,
	checkDuplicateUsernameAndEmail, checkRoles, verifyToken
}