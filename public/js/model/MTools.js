export default class MTools {
  static parsedArrayValidator(parsedArray) {
    // すべてのコマンドに適用されるルールをチェック
    let validationResponse = MTools.universalValidator(parsedArray);
    if (!validationResponse['isValid']) return validationResponse;

    // コマンドごとの検証
    validationResponse = MTools.commandArgumentsValidator(
      parsedArray.slice(1, 3)
    );
    if (!validationResponse['isValid']) return validationResponse;

    return { isValid: true, errorMessage: '' };
  }

  // 入力コマンド全体に対するバリデーション
  static universalValidator(parsedArray) {
    const validCommandList = [
      'add',
      'subtract',
      'multiply',
      'divide',
      'exp',
      'log',
      'abs',
      'sqrt',
      'round',
      'ceil',
      'floor',
    ];

    // 文字列が３であるか
    if (parsedArray.length != 3) {
      return {
        isValid: false,
        errorMessage: `command line input must contain exactly 3 elements: 'packageName commandName arguments'`,
      };
    }
    // 演算子が正しいか
    if (validCommandList.indexOf(parsedArray[1]) == -1) {
      return {
        isValid: false,
        errorMessage: `MTools only supports the following commands: ${validCommandList.join(
          ','
        )}`,
      };
    }
    // 3つ目の入力が数字であるか
    if (!MTools.isAllElementsContainNumbers(parsedArray[2].split(','))) {
      return {
        isValid: false,
        errorMessage: `last element of command line input, arguments, should contain only numbers and commas`,
      };
    }

    return { isValid: true, errorMessage: '' };
  }

  static isAllElementsContainNumbers(element) {
    return element.reduce((prev, curr) => {
      let parsedNum = Number(curr);
      return prev && typeof parsedNum == 'number' && !isNaN(parsedNum);
    }, true);
  }

  static commandArgumentsValidator(parsedArray) {
    const operator = parsedArray[0];
    const singleArgumentCommands = ['abs', 'sqrt', 'ceil', 'round', 'floor'];
    const doubleArgumentCommands = [
      'add',
      'subtract',
      'divide',
      'multiply',
      'exp',
      'log',
    ];
    const argsArray = parsedArray[1].split(',').map((string) => Number(string));

    // 必要な数字が１つの場合
    if (singleArgumentCommands.indexOf(operator) != -1) {
      return MTools.singleArgValidator(operator, argsArray);
    }
    // 必要な数字が2つの場合
    if (doubleArgumentCommands.indexOf(operator) != -1) {
      return MTools.doubleArgValidator(operator, argsArray);
    }
  }

  static singleArgValidator(commandName, argsArray) {
    if (argsArray.length != 1)
      return {
        isValid: false,
        errorMessage: `command ${commandName} requires exactly 1 argument`,
      };
    if (commandName == 'sqrt' && argsArray[1] < 0)
      return {
        isValid: false,
        errorMessage: `command ${commandName} only supports arguments with value >= 0`,
      };

    return { isValid: true, errorMessage: '' };
  }

  static doubleArgValidator(commandName, argsArray) {
    if (argsArray.length != 2) {
      return {
        isValid: false,
        errorMessage: `command ${commandName} requires exactly 2 arguments`,
      };
    }
    if (commandName == 'divide' && argsArray[1] == 0) {
      return {
        isValid: false,
        errorMessage: `command ${commandName} requires divisors != 0`,
      };
    }
    if ((commandName == 'log' && argsArray[0] <= 0) || argsArray[0] == 1) {
      return {
        isValid: false,
        errorMessage: `command ${commandName} requires a base > 0 and not equal to 1`,
      };
    }
    if ((commandName == 'log' && argsArray[0] <= 0) || argsArray[0] == 1) {
      return {
        isValid: false,
        errorMessage: `command ${commandName} requires a positive antilogarithm`,
      };
    }

    return { isValid: true, errorMessage: '' };
  }

  static evaluatedParsedString(parsedArray) {
    let result = 0;
    const argsArray = parsedArray[2]
      .split(',')
      .map((stringArgument) => Number(stringArgument));
    const argA = argsArray[0];
    const argB = argsArray[1];
    const commandName = parsedArray[1];

    if (commandName == 'add') result = argA + argB;
    else if (commandName == 'subtract') result = argA - argB;
    else if (commandName == 'multiply') result = argA * argB;
    else if (commandName == 'divide') result = argA / argB;
    else if (commandName == 'exp') result = Math.pow(argA, argB);
    else if (commandName == 'log') result = Math.log(argB) / Math.log(argA);
    else if (commandName == 'sqrt') result = Math.sqrt(argA);
    else if (commandName == 'abs') result = Math.abs(argA);
    else if (commandName == 'round') result = Math.round(argA);
    else if (commandName == 'ceil') result = Math.ceil(argA);
    else if (commandName == 'floor') result = Math.floor(argA);
    else
      console.log(
        'MTools.evaluatedResultsStringFromparsedArray:: invalid command name'
      );

    return 'your result is: ' + result;
  }
}
