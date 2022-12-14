Object.prototype[Symbol.iterator] = function() {

  if ((typeof this.from != 'number')||(typeof this.to != 'number')||(this.to<this.from)) throw new Error('Error!')
  if ((this.from == Infinity)||(this.to == Infinity)) throw new Error('Infinity error')
  return {
    current: this.from,
    last: this.to,

    next() {
	  return {done: this.current>this.last, value: this.current++}
    }
  }
}
