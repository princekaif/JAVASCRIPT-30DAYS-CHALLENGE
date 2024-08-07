// Activity 1: Linked List

const { isEmpty } = require("lodash");

// • Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


// • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList{
    constructor(){
      this.head=null;
    }
    //add at first
    addFirst(value){
      const newNode =new Node(value);
      newNode.next=this.head;  
      this.head=newNode;
    }
    addLast(value){
      const newNode =new Node(value);
      if(!this.head){
          this.head=newNode;
      }else{
          let current=this.head;
          while(current.next){
              current=current.next;
          }
          current.next=newNode;
      }
    }
    addposition(index,value){
      const newNode=new Node(value);
      if(index==0){
          return this.addFirst(value);
      }
      let current=this.head;
      for(let i=0;i<index-1;i++){
          current=current.next;
      }
      newNode.next=current.next;
      current.next=newNode;
    }
    removetop(){
       if(!this.head){
          return ;
       }
       this.head=this.head.next; 
    }
    removelast(){
      if(!this.head){
          return;
      }else{
          let current=this.head;
          while(current.next.ext){
              current=current.next;
          }
          current.next=null;
      }
    }
    print(){
      let current=this.head;
      while(current){
          console.log(current.value);
          current=current.next;
      }
    }
}
const linkedList=new LinkedList();
linkedList.addFirst(5);
linkedList.addFirst(6);
linkedList.addFirst(7);
linkedList.addLast(8);
linkedList.addposition(3,9);
linkedList.print();
// Activity 2: Stack

// • Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack{
    constructor(){
        this.items=[];

    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty())return null;
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty())return null;
        return this.items[this.items.length-1];

    }
    isEmpty(){
        return this.items.length===0;
    }
    print(){
       let index=this.items.length;
        for(let i=0;i<index;i++){
            console.log(this.items[i]);
        }
    }
}
 const stack=new Stack();
 console.log("stack----------------------------------");
 stack.push(4);
 stack.push(7);
 stack.push(9);

stack.print();



// • Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reversestack(str){
    const stack =new Stack();
    for(let c of str){
        stack.push(c);

    }
    let reverse='';
    while(!stack.isEmpty()){
         reverse+=stack.pop();
    }
    return reverse;

}
console.log(reversestack("king"));
// Activity 3: Queue

// • Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class queue{
    constructor(){
        this.items=[];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty())return null;
        return this.items.shift();
    }
    front(){
        if(this.isEmpty())return null;
          return this.items[0];
    }
    isEmpty(){
        return this.items===0;
}
print(){
    let index=this.items.length;
     for(let i=0;i<index;i++){
         console.log(this.items[i]);
     }
 }

}
const Q=new queue();
Q.enqueue(4);
Q.enqueue(8);
Q.enqueue(6);
Q.enqueue(2);
Q.print();
console.log("ndnjie");
Q.dequeue();
Q.print();
// • Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class printerQueue{
    constructor(){
        this.queue=new queue();
    }
    addqueue(job){
        this.queue.enqueue(job);
        console.log(`added${job}`);
    }
    processjob(){
        if(this.queue.isEmpty()){
            console.log("no jobs to process");
        }
        else{
            const job =this.queue.dequeue();
            console.log(`processing job ${job}`);
        }
    }
    print(){
        let index=this.queue.length;
         for(let i=0;i<index;i++){
             console.log(this.queue[i]);
         }
     }

}
const print =new printerQueue();
print.addqueue("webdev");
print.addqueue("python");
print.print();
print.processjob();
print.print();

// Activity 4: Binary Tree

// • Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null; // Left child
      this.right = null; // Right child
    }
  }
  

// • Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a value into the tree
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  // Perform in-order traversal
  inOrderTraversal(node = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// Example usage
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.inOrderTraversal(); // 2, 3, 4, 5, 7
  
// Activity 5: Graph (Optional)

// • Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

// • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.