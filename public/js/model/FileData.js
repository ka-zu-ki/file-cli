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
    this.data = new Date()
    this.child = new SinglyLinkedList()
    this.content = null
  }

  append(node) {
    this.child.append(node)
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
}

class FileTree {
  constructor() {
    this.rootDir = new Node('root', 0, null)
    this.currentDir = this.rootDir
  }
}

export { Node, FileTree }
