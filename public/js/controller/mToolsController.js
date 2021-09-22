import View from '../view/applicationView.js';
import MTools from '../model/MTools.js';
import { cliInput } from '../config.js';

const submitSearch = (e) => {
  if (e.key == "Enter") {
    const parsedArray = MTools.commandLineParser(cliInput.value)
    View.echo(e)

    const result = MTools.evaluatedParsedString(parsedArray)
    View.echoResult(e, result)
  }
}

export { submitSearch }