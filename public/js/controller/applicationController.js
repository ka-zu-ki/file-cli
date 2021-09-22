import { cliInput, cliOutput } from '../config.js';
import { CommandNode, CommandLine } from '../model/Command.js';

const commandLine = new CommandLine();

cliInput.addEventListener('keydown', (e) => {
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
});

document.addEventListener('keydown', (e) => {
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
});
