function createDebounceFunction(callback,delay) {
	let timer = 0
	return function(){
		clearTimeout(timer)
		timer = setTimeout(callback,delay)
	}
}


let time = Date.now()
const check = () => { console.log(`Примерно в это время ожидается вывод, спустя примерно ${Date.now()-time} миллисекунд`) }

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);

setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 400);
setTimeout(check,1400) //проверим
