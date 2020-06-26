import { generateRandomNum } from '../src/utility.js';
import playGame from '../src/index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRoundData = () => {
  const num = generateRandomNum(1000);

  const question = String(num);

  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

const startGame = () => {
  playGame(gameRule, generateRoundData);
};

export default startGame;
