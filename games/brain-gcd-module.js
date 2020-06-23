import getRandomNum from '../src/utility.js';
import playGame from '../src/index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum(1000);
  const num2 = getRandomNum(1000);

  const question = `${num1} ${num2}`;

  const answer = getGcd(num1, num2);

  return [question, String(answer)];
};

const startGame = () => {
  playGame(gameRule, getQuestionAndAnswer);
};

export default startGame;
