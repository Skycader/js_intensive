//big O here is N (linear), longer input array, longer checking and cutting.
function selectFromInterval(arr,a,b) {
	if (arr.filter((item)=>typeof item != 'number').length) throw new Error("Invalid type")
	return (a<b) ? arr.filter(item=>(a<=item&&item<=b)) : arr.filter(item=>(b<=item&&item<=a))
}


