import { getRandomNum } from '../src/utility.js';
import playGame from '../src/index.js';

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

const getAnswer = (operationNum, num1, num2) => {
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
  const answer = getAnswer(operationNum, num1, num2);

  return [question, String(answer)];
};

const startGame = () => {
  playGame(gameRule, getQuestionAndAnswer);
};

export default startGame;
