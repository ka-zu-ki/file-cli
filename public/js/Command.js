class CommandNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// 双方向連結リスト
class CommandLine {
  constructor() {
    this.head = null;
    this.tail = null;
    this.iterator = null;
  }

  peek() {
    if (this.head == null) return null;
    return this.head.data;
  }

  add(newNode) {
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      newNode.next = null;
      this.tail = newNode;
    }

    this.iterator = this.tail
  }

  // prevCommand() {
  //   if (this.iterator == this.tail) {
  //     this.iterator = this.iterator.prev
  //     return this.tail.data
  //   } else {
  //     this.iterator = this.iterator.prev
  //     return this.iterator.data
  //   }
  // }
}

export { CommandNode, CommandLine };
