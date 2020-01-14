
// Ex07
// Implement a Stack (LIFO) with 2 methods: push(v: T) and pop()
import Node from './Node/node';

class Stack {

  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    var node = new Node(data);
    node.previous = this.top;
    this.top = node;
    this.size += 1
    return this.top;
  }

  pop(data) {
    let temp = this.top;
    this.top = this.top.previous;
    this.size -= 1:
    return temp;
  }
}
