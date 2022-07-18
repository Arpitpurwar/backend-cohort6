// function printFruits(arr){
// 	let index = 0
// 	return {
// 		next: function(){
// 			return index < arr.length ? {value : arr[index++], done : false} : {value : undefined, done : true}
// 		}
// 	}
// }

function printFruits(arr){
	for(let i = 0; i< arr.length; i++){
		yield arr[i]
	}
}
const arr = ['mango', 'apple', 'banana']

const fruitsIt = printFruits(arr)

console.log(fruitsIt.next()) // {value : 'mango', done: false}

console.log('heyyyy i am after firdt iteration');

console.log(fruitsIt.next()) // {value: 'apple', done: false}

console.log(fruitsIt.next()) // {value: 'banana', done: false}

console.log(fruitsIt.next()) // {value : undefined, done: true}


// 1. iterator function always return a next()
// 2. itertor return a object as a value which has two keys {value : , done: false}


