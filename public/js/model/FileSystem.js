import View from "../view/applicationView.js"
import { FileTree, Node } from "./FileData.js"

let fileTree = new FileTree()

export default class FileSystem {
  static commands = ['touch']

  static execCommand(parsedArray) {
    const command = parsedArray[0]
    switch(command) {
      case 'touch':
        fileTree.currentDir.append(new Node(parsedArray[1], 1, fileTree.currentDir))
        View.echoCreated(parsedArray[1])
        break
      case 'mkdir':
        fileTree.currentDir.append(new Node(parsedArray[1], 0, fileTree.currentDir))
        View.echoCreated(parsedArray[1])
        break
      case 'ls':
        const result = fileTree.currentDir.printList()
        console.log(result)
        View.echoFileResult(result)
        break
      case 'cd':
        
    }
  }
}