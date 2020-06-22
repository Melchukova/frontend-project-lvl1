import { getRandomNum, tranclatePredicate, checkPrime } from '../src/utility.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const num = getRandomNum(1000);

  const question = String(num);

  const result = tranclatePredicate(checkPrime(num));

  return [question, result];
};

export { gameRule, getQuestionAndAnswer };
