import { getRandomNum } from '../src/utility.js';

const gameRule = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const progressonLength = 10;
  const indOfHidedElement = getRandomNum(progressonLength);
  const startNum = getRandomNum(1000);
  const step = getRandomNum(100);
  const getElOfProgrssion = (num) => startNum + step * num;

  const progression = [];
  for (let i = 0; i < progressonLength; i += 1) {
    progression.push(i === indOfHidedElement ? '..' : getElOfProgrssion(i));
  }
  const question = progression.join(' ');

  const result = getElOfProgrssion(indOfHidedElement);
  return [question, String(result)];
};

export { gameRule, getQuestionAndAnswer };
