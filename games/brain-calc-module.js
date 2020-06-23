import { getRandomNum } from '../src/utility.js';

const gameRule = 'What is the result of the expression?';

const getQuestion = (operationNum, num1, num2) => {
  switch (operationNum) {
    case 0:
      return `${num1} + ${num2}`;
    case 1:
      return `${num1} - ${num2}`;
    case 2:
    default:
      return `${num1} * ${num2}`;
  }
};

const getResult = (operationNum, num1, num2) => {
  switch (operationNum) {
    case 0:
      return num1 + num2;
    case 1:
      return num1 - num2;
    case 2:
    default:
      return num1 * num2;
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum(1000);
  const num2 = getRandomNum(1000);
  const operationNum = getRandomNum(3);

  const question = getQuestion(operationNum, num1, num2);
  const result = getResult(operationNum, num1, num2);

  return [question, String(result)];
};

export { gameRule, getQuestionAndAnswer };
