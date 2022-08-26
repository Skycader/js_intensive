//big O: constant (1)
const queue = () => {
	let queue = []
	return {
		enqueue: (item) => queue.push(item),
		dequeue: () => queue.shift(),
		front: () => queue[0],
		isEmpty: () => queue.length==0,
		size: () => queue.length
	}
}




