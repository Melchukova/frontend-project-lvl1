import { generateRandomNum } from '../src/utility.js';
import playGame from '../src/index.js';

const gameRule = 'What is the result of the expression?';

const calcExpressionResult = (operationNum, num1, num2) => {
  switch (operationNum) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown sign number: ${operationNum}`);
  }
};

const generateRoundData = () => {
  const operators = ['+', '-', '*'];
  const num1 = generateRandomNum(1000);
  const num2 = generateRandomNum(1000);
  const operatorInd = generateRandomNum(2);
  const operator = operators[operatorInd];

  const question = `${num1} ${operator} ${num2}`;

  const answer = calcExpressionResult(operator, num1, num2);

  return [question, String(answer)];
};

const startGame = () => {
  playGame(gameRule, generateRoundData);
};

export default startGame;
