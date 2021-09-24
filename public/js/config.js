const cliInput = document.getElementById('cliInput');
const cliOutput = document.getElementById('cliOutput');
const cliOutputContainer = document.getElementById('cliOutputContainer');

const currencyTable = {
  Japan: { Yen: 1 },
  India: { Rupee: 1.4442, Paise: 0.014442 },
  USA: { Dollar: 106.1, USCent: 1.061 },
  Europe: { Euro: 125.56, EuroCent: 1.2556 },
  UAE: { Dirham: 28.89, Fils: 0.2889 },
};

export { cliInput, cliOutput, cliOutputContainer, currencyTable };
