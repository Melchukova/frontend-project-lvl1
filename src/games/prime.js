import { generateRandomNum } from '../utility.js';
import playGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const generateRoundData = () => {
  const num = generateRandomNum(1, 1000);

  const question = String(num);

  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

const startGame = () => {
  playGame(gameRule, generateRoundData);
};

export default startGame;
