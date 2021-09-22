import { cliInput, cliOutput } from '../config.js';

cliInput.addEventListener('keyup', (e) => submitSearch(e))

const submitSearch = (e) => {
  if (e.key == "Enter") {
    let parsedArray = MTools.commandLineParse(cliInput.value)
  }
}