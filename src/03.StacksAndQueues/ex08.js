
// Ex08
// Implement a Queue (FIFO) with 2 methods: enqueue(v: T) and dequeue()
import Node from './Node/node';

class Queue {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
    } else {
      let n = this.first;
      while(n.next) {
        n = n.next;
      }
      n.next = node;
    }
    this.size += 1;
    return node;
  }

  dequeue() {
    let temp = this.first;
    this.first = this.first.next;
    this.size -= 1;
    return temp;
  }
}
