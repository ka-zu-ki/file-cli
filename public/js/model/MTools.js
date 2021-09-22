export default class MTools {
  static commandLineParser(input) {
    let parsedArray = input.trim().split(' ')
    return parsedArray
  }

  static evaluatedParsedString(parsedArray) {
    console.log(parsedArray)
    let result = 0;
    let argsArray = parsedArray[2].split(",").map(stringArgument=>Number(stringArgument));
    let argA = argsArray[0];
    let argB = argsArray[1];
    let commandName = parsedArray[1];

    if (commandName == "add" ) result = argA+argB;
    else if (commandName == "subtract" ) result = argA-argB;
    else if (commandName == "multiply" ) result = argA*argB;
    else if (commandName == "divide" ) result =  argA/argB;
    else if (commandName == "exp" ) result = Math.pow(argA, argB);
    else if (commandName == "log" ) result = Math.log(argB)/Math.log(argA);
    else if (commandName == "sqrt" ) result = Math.sqrt(argA);
    else if (commandName == "abs" ) result = Math.abs(argA); 
    else if (commandName == "round" ) result = Math.round(argA);
    else if (commandName == "ceil" ) result = Math.ceil(argA);
    else if (commandName == "floor" ) result = Math.floor(argA); 
    else console.log("MTools.evaluatedResultsStringFromparsedArray:: invalid command name")

    return "your result is: "+result;
  }
}