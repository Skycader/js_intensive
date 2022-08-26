const stack = () => {
	let stack = []
	return {
		push: (item) => { stack.push(item) },
		peek: () => stack[stack.length-1],
		pop: () => {stack.pop()},
		length: () => stack.length
	}
}

let myStack = stack()
myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.length())
myStack.pop()
console.log(myStack.length())

