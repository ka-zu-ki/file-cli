import { CommandNode } from '../model/Command.js';
import { commandLine } from '../controller/applicationController.js';
import { cliInput, cliOutput } from '../config.js';

export default class View {
  static echo(e) {
    if (e.key == 'Enter') {
      cliOutput.innerHTML += `
        <p class="text-green-500 text-2xl">
          user<span class="text-white">: ${cliInput.value}</span>
        </p>
      `;
  
      const command = new CommandNode(cliInput.value);
      commandLine.add(command);
  
      cliInput.value = '';
    }
  }

  static echoResult(e, value) {
    if (e.key == 'Enter') {
      cliOutput.innerHTML += `
        <p class="text-green-500 text-2xl">
          user<span class="text-white">: ${value}</span>
        </p>
      `;
    }
  }

  static history(e) {
    if (commandLine.iterator) {
      if (e.key == 'ArrowUp') {
        cliInput.value = commandLine.iterator.data;
        commandLine.iterator = commandLine.iterator.prev
          ? commandLine.iterator.prev
          : commandLine.iterator;
      }
      if (e.key == 'ArrowDown') {
        cliInput.value = commandLine.iterator.data;
        commandLine.iterator = commandLine.iterator.next
          ? commandLine.iterator.next
          : commandLine.iterator;
      }
    }
  }
}
