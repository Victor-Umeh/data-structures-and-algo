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
      return "stack is full";
    }
    this.base++;
    this.struct[this.base] = data;
    return this.struct;
  }
  // pop
  pop() {
    if (this.base === -1) {
      return "stack is empty";
    }
    this.struct[this.base];
    this.struct.length = this.base--;
    return this.struct[this.base];
  }
  // isFull
  isFull() {
    return this.size - 1 === this.base;
  }
  // isEmpty
  static isEmpty() {
    return this.base === -1;
  }
  // clear
  clear() {
    if (this.isEmpty()) return "stack is empty";
    this.base = -1;
    this.struct.length = this.base + 1;
    return this.struct;
  }
  // peek
  peek() {
    if (this.isEmpty()) return this.struct;
    return this.struct[this.base];
  }
  // search
  search(val) {
    if (this.base === -1) return -1;
    return this.struct.filter((x) => x === val);
  }
}
