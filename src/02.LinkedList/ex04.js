
// Ex04
// Create a Linked List with 2 methods: appendToTail(v: T) and deleteNode(index: number)
import Node from './Node/node';

class LinkedList {

    constructor () {
        this.head = null;
    }

    getAt(index) {
       let counter = 0;
       let node = this.head;
       while (node) {
           if (counter === index) {
              return node;
           }
           counter++;
           node = node.next;
       }
       return null;
     }

   deleteNode(index) {
     if(!this.head){
       this.head = new Node(data);
     }
     if (index === 0) {
         this.head = this.head.next;
         return;
     }
     const previous = this.getAt(index - 1);

     previous.next = previous.next.next;
     return this.head
   }

   appendToTail(data, index) {
     if (!this.head) {
         this.head = new Node(data);
         return;
     }

     if (index === 0) {
        this.head = new Node(data, this.head);
        return;
     }

     const previous = this.getAt(index - 1);
     let newNode = new Node(data);
     newNode.next = previous.next;
     previous.next = newNode;

     return this.head
   }
}
