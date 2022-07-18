const arr = [1,2,3,4,undefined, null, '', '1','2','3']

console.log(arr[11])


function filterFeature(arr, customizeFunction){
	const newArray = []	
	for(let i = 0; i< arr.length; i++){
		const value = customizeFunction(arr[i])
		newArray.push(value)
	}
	return newArray
}

const filteredArraywithoutNull = filterFeature(arr, function(element){
	if(element !== null){
		return element
	}
})

const filteredArraywithoutEmptyString = filterFeature(arr, function(element){
	if(element != ''){
		return element
	}
})

console.log(filteredArraywithoutNull, filteredArraywithoutEmptyString)