import { FileTree, Node } from "./FileData.js"

let fileTree = new FileTree()

export default class FileSystem {
  static commands = ['touch']

  static execCommand(parsedArray) {
    const command = parsedArray[0]
    switch(command) {
      case 'touch':
        fileTree.currentDir.append(new Node(parsedArray[1], 1, fileTree.currentDir))
        console.log(fileTree)
        return
    }
  }
}