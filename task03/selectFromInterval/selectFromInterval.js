function selectFromInterval(arr,a,b) {
	if (isNaN(a+b)) throw new Error("Invalid range")
	if (arr.filter((item)=>typeof item != 'number').length) throw new Error("Invalid type")
	return (a<b) ? arr.slice(a-1,b) : arr.slice(b-1,a)
}


