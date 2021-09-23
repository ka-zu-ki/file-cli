import View from '../view/applicationView.js';
import { CommandLine } from '../model/Command.js';
import { submitSearch } from './mToolsController.js';
import { cliInput } from '../config.js';

export const commandLine = new CommandLine();

cliInput.addEventListener('keydown', (e) => {
  const parsedArray = CommandLine.commandLineParser(cliInput.value);
  View.echo(e);
  View.history(e)

  // check package
  if (parsedArray[0] == 'MTools') {
    submitSearch(e, parsedArray)
  }
});
