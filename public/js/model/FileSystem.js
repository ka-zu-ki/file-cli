import View from '../view/applicationView.js';
import { FileTree, Node } from './FileData.js';

let fileTree = new FileTree();

export default class FileSystem {
  static commands = ['touch'];

  static execCommand(parsedArray) {
    const command = parsedArray[0];
    const name = parsedArray[1];

    switch (command) {
      case 'touch':
        fileTree.currentDir.append(new Node(name, 1, fileTree.currentDir));
        View.echoCreated(name);
        break;
      case 'mkdir':
        fileTree.currentDir.append(new Node(name, 0, fileTree.currentDir));
        View.echoCreated(name);
        break;
      case 'ls':
        const result = fileTree.currentDir.printList();
        View.echoFileResult(result);
        break;
      case 'cd':
        if (name == null || name == '..') {
          fileTree.currentDir = fileTree.rootDir;
        }

        const boolean = fileTree.isChildDir(name)
        console.log(boolean)

        // const nextDir = fileTree.currentDir.getNode(name, 0);
        // console.log(nextDir)
        // 子階層に該当のディレクトリが存在する場合
        break;
    }
  }
}
