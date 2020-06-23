import { getRandomNum } from '../src/utility.js';
import playGame from '../src/index.js';

const gameRule = 'What number is missing in the progression?';
const progressonLength = 10;

const getElementOfProgression = (startNum, step, num) => startNum + step * num;

const getProgression = (startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressonLength; i += 1) {
    progression.push(getElementOfProgression(startNum, step, i));
  }
  return progression;
};

const hideElement = (progression, indOfHidedElement) => {
  const progressionWithHidedElement = [...progression];
  progressionWithHidedElement.splice(indOfHidedElement, 1, '..');
  return progressionWithHidedElement;
};

const getQuestionAndAnswer = () => {
  const indOfHidedElement = getRandomNum(progressonLength);
  const startNum = getRandomNum(1000);
  const step = getRandomNum(100);

  const progression = getProgression(startNum, step);
  const progressionWithHidedElement = hideElement(progression, indOfHidedElement);
  const question = progressionWithHidedElement.join(' ');

  const result = getElementOfProgression(startNum, step, indOfHidedElement);
  return [question, String(result)];
};

const startGame = () => {
  playGame(gameRule, getQuestionAndAnswer);
};

export default startGame;
