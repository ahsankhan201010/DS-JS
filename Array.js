class MyArr {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(value) {
    this.data[this.length] = value;
    return ++this.length;
  }
  pop() {
    if (this.length > 0) {
      const el = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return el;
    }
    return undefined;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[--this.length];
  }
}

const arr = new MyArr();
