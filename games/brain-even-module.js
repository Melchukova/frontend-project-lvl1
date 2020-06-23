import { getRandomNum, tranclatePredicate } from '../src/utility.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const num = getRandomNum(1000);

  const question = String(num);
  const isEvenNum = isEven(num);
  const result = tranclatePredicate(isEvenNum);

  return [question, result];
};

export { gameRule, getQuestionAndAnswer };
