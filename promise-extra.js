const successPromise = () => {
	return new Promise((resolve, reject)=> {
		resolve('hey I am success one')
	})
}

const failurePromise = () => {
	return new Promise((resolve, reject) => {
		reject('hey I am rejected one')
	})
}

const mixedPromise = (flag) => {
	return new Promise((resolve, reject)=>{
		if(flag){
			resolve('hey, flag is true')
		}else{
			reject('hey, flag is false')
		}
	})
}

successPromise().then( data => console.log("data",data))

failurePromise().catch(err => console.log('err',err))

mixedPromise(false).then(data => console.log('mixedData', data))
.catch(err => console.log('mixederr', err))


