class Calculator {
  constructor(x, y) {
    if (isNaN(x) || isNaN(y)) throw new Error("Invalid numbers");
    this._x = x;
    this._y = y;
  }
  setX(x) {
    if (isNaN(x)) throw new Error("Invalid number");
    this._x = x;
  }
  setY(y) {
    if (isNaN(y)) throw new Error("Invalid number");
    this._y = y;
  }
  logSum() {
    console.log(this._x + this._y);
  }
  logMul() {
    console.log(this._x * this._y);
  }
  logSub() {
    console.log(this._x - this._y);
  }
  logDiv() {
    if (!this._y) throw new Error("Deleting by zero");
    console.log(this._x / this._y);
  }
}
