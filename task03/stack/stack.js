const stack = () => {
	let stack = []
	return {
		add: (item) => { stack.push(item) },
		peek: () => stack[stack.length-1],
		remove: () => {stack.pop()},
		length: () => stack.length
	}
}

let myStack = stack()
myStack.add(1)
myStack.add(2)
console.log(myStack.peek())
console.log(myStack.length())
myStack.remove()
console.log(myStack.length())

