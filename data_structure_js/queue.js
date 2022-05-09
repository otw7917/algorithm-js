// Queue
// First in First out
// enqueue(unshift), dequeue( js - shift), front

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this._size = 0;
    this._head = null;
    this._rear = null;
  }

  size() {
    return this._size;
  }
  // 노드 추가하기
  enqueue(item) {
    const node = new Node(item);
    if (!this._head) {
      this._head = node;
    } else {
      this._head.next = node;
    }
    this._rear = node;
    this._size++;
  }
  // 큐 맨 앞 요소 제거
  dequeue() {
    if (!this._head) return Error("empty queue");
    const item = this._head;
    this._head = this._head.next;
    this._size--;
    return item;
  }
  // 맨 앞에 요소 구하기
  front() {
    if (!this._head) return Error("empty queue");
    return this._head.item;
  }
}
