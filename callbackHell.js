setTimeout(function(){
	console.log('Hey I am from setTimeour callabck')
}, 200)


function first(){
	secondFn()	
}

function secondFn(){
	thirdFn()
}

function thirdFn(){
	fourthfn()
}

firstFn()