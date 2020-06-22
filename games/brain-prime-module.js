import { getRandomNum, tranclatePredicate, isPrime } from '../src/utility.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const num = getRandomNum(1000);

  const question = String(num);

  const result = tranclatePredicate(isPrime(num));

  return [question, result];
};

export { gameRule, getQuestionAndAnswer };
