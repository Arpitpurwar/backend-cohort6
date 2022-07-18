function abc (){
	console.log(this)
}


this.abc = 'hello'

console.log(this)