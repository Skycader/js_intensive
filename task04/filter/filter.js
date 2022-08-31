Array.prototype.myFilter = function(callback,thisArg){
	if (thisArg) this = thisArg
	const result = []
	let index = 0
	for (let item of this) {
		if (callback(item,index,this)) {
			result.push(item)
		}
		index++
	}
	return result
}

//[1,2,3].filter((item)=>item>2)
