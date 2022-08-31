Array.prototype.myFilter = function(callback,thisArg){
	const result = []
	let index = 0
	for (let item of this) {
		if (callback.call(thisArg, item,index,this)) result.push(item)
		index++
	}
	return result
}
