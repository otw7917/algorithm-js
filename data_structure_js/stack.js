// stack
// Last In First Out
// size, push, pop, peek, isEmpty
// 연결리스트로 stack 구현하기
class Stack {
  // stack 생성시 빈노드
  constructor() {
    this._head = null;
    this._size = 0;
  }

  size() {
    return this._size;
  }

  push(item) {
    const node = { item, next: this._head };
    this._head = node;
    this._size++;
  }

  pop() {
    if (!this._head) {
      throw new Error("empty ");
    }
    // 젤 위에를 빼면 this._head 에 node.next가 들어가면 됌
    const node = this._head;
    this._head = node.next;
    this._size--;
  }

  // 젤 위에 아이템 꺼내기
  peek() {
    if (!this._head) {
      throw new Error("empty ");
    }
    return this._head.item;
  }

  isEmpty() {
    if (!this._head) {
      return true;
    }
    return false;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack._head);
