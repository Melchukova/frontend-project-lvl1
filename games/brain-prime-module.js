import getRandomNum from '../src/utility.js';
import playGame from '../src/index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const num = getRandomNum(1000);

  const question = String(num);

  const isPrimeNum = isPrime(num);
  const answer = isPrimeNum ? 'yes' : 'no';

  return [question, answer];
};

const startGame = () => {
  playGame(gameRule, getQuestionAndAnswer);
};

export default startGame;
