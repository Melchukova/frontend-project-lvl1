import { generateRandomNum } from '../src/utility.js';
import playGame from '../src/index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const calcGcd = (num1, num2) => (num2 === 0 ? num1 : calcGcd(num2, num1 % num2));

const generateRoundData = () => {
  const num1 = generateRandomNum(1000);
  const num2 = generateRandomNum(1000);

  const question = `${num1} ${num2}`;

  const answer = calcGcd(num1, num2);

  return [question, String(answer)];
};

const startGame = () => {
  playGame(gameRule, generateRoundData);
};

export default startGame;
