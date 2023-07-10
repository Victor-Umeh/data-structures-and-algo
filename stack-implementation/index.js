"use strict";
class Stack {
  constructor() {
    this.struct = [];
    this.base = -1;
  }
  // push
  push(data) {
    this.base++;
    this.struct[this.base] = data;
  }
  // pop
  pop(){
    if(base === -1){
        
    }
  }
  // isFull
  // isEmpty
  // clear
  // peek
  // search
}

const test = new Stack();
test.push(1);
test.push(2);
test.push(3);
test.push(4);
console.log(test);
