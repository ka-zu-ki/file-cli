/*
  ディレクトリorファイル

  name: ディレクトリorファイルの名前
  type: ディレクトリorファイル
  parent: 要素の親
  next: 同一階層の要素
  date: 作成日
  child: 子階層(ディレクトリのみ)
  content: ファイルの中身(ファイルのみ)
*/
class Node {
  static type = {
    0: 'dir',
    1: 'file'
  }

  constructor(name, type, parent) {
    this.name = name
    this.type = type
    this.parent = parent
    this.next = null
    this.date = new Date()
    this.child = new SinglyLinkedList()
    this.content = null
  }

  append(node) {
    this.child.append(node)
  }

  printList() {
    return this.child.printList()
  }
}

// ディレクトリの子階層
class SinglyLinkedList {
  constructor() {
    this.head = null
  }

  append(node) {
    if (this.head == null) return this.head = node

    let iterator = this.head
    while (iterator.next != null) {
      iterator = iterator.next
    }
    iterator.next = node
  }

  printList() {
    let iterator = this.head
    let result = ''
    while (iterator != null) {
      result += iterator.name + ' '
      iterator = iterator.next
    }
    return result
  }
}

class FileTree {
  constructor() {
    this.rootDir = new Node('root', 0, null)
    this.currentDir = this.rootDir
  }
}

export { Node, FileTree }
