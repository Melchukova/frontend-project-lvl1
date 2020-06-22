import { getRandomNum, getGcd } from '../src/utility.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum(1000);
  const num2 = getRandomNum(1000);

  const question = `${num1} ${num2}`;

  const result = getGcd(num1, num2);

  return [question, String(result)];
};

export { gameRule, getQuestionAndAnswer };
