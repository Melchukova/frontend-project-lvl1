import { getRandomNum, tranclatePredicate } from '../src/utility.js';
import playGame from '../src/index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const num = getRandomNum(1000);

  const question = String(num);
  const isEvenNum = isEven(num);
  const result = tranclatePredicate(isEvenNum);

  return [question, result];
};

const startGame = () => {
  playGame(gameRule, getQuestionAndAnswer);
};

export default startGame;
