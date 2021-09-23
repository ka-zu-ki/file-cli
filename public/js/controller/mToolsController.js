import View from '../view/applicationView.js';
import MTools from '../model/MTools.js';

const submitSearch = (e, parsedArray) => {
  if (e.key == 'Enter') {
    let validationResponse = MTools.parsedArrayValidator(parsedArray);

    if (!validationResponse['isValid']) {
      View.echoResult(e, validationResponse['errorMessage']);
    }
    else {
      const result = MTools.evaluatedParsedString(parsedArray);
      View.echoResult(e, result);
    }
  }
};

export { submitSearch };
