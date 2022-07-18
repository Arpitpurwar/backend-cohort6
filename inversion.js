// function filter(array){
// 	let newArray=[]
// 	for(let i =0; i< array.length;i++)
// {
// 	if(array[i]< 4 && array[i]!==  null){
// 		newArray.push(array[i])
// 	}
// }}

function filter(array, filterCb){
	let newArray=[]
	for(let i =0; i< array.length;i++)
{
	const result = filterCb(array[i])
	newArray.push(result)
}}


filter([2,3,4,5],(value) => value> 4)