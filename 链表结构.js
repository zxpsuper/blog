/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-11-06 11:36:03 
 * @Last Modified by:   mikey.zhaopeng 
 * @Last Modified time: 2018-11-06 11:36:03 
 */

class Node {
  constructor(element) {
    this.element = element; //当前节点的元素
    this.next = null; //下一个节点链接
  }
}

class linkTable {
  constructor() {
    this.head = new Node("head");
  }
  // 寻找节点
  find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  // 在 item 之后插入 newElement 节点
  insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
  }
  // 显示链表
  display() {
    var currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.element);
      console.log(t);
      currNode = currNode.next;
    }
  }
  // 找前一个
  findPrev(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && currNode.next.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  // 移除
  remove(item) {
    var prevNode = this.findPrev(item);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }
}
var fruits = new linkTable();

fruits.insert("Apple", "head");
fruits.insert("Banana", "Apple");
fruits.insert("Pear", "Banana");
console.log(fruits)
