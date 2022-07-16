console.log('hey I am from utils files')


function printFn(){
	console.log('calling printFn()')
}

printFn()

const count = 5;

const fetchValueMethod = function(){
	return 'hello from fetchValue()'
}

module.exports = {
	countValue : count,
	fetchValue: fetchValueMethod
}