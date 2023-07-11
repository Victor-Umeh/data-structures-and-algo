"use strict";
class Stack {
  constructor(size) {
    this.struct = [];
    this.base = -1;
    this.size = size;
  }
  // push
  push(data) {
    if (this.base === this.size - 1) {
      return console.error("stack is full");
    }
    this.base++;
    this.struct[this.base] = data;
    return this.struct;
  }
  // pop
  pop() {
    if (this.base === -1) {
      return console.log("stack is empty");
    }
    const lastIndex = this.struct.length - 1;
    const lastItem = this.struct[lastIndex];
    this.struct.length = lastIndex;
    return lastItem;
  }
  // isFull
  isFull() {
    return this.size - 1 === this.base;
  }
  // isEmpty
  isEmpty() {
    return this.base === -1;
  }
  // clear
  // peek
  // search
}

const test = new Stack(3);
test.push(1);
test.push(2);
test.push(3);
console.log(test.push(4));
console.log(test.isFull());
console.log(test.isEmpty());
// console.log(test);
