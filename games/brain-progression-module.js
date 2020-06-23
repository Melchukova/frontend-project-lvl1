import getRandomNum from '../src/utility.js';
import playGame from '../src/index.js';

const gameRule = 'What number is missing in the progression?';

const getElementOfProgression = (startNum, step, num) => startNum + step * num;

const getProgression = (progressonLength, startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressonLength; i += 1) {
    progression.push(getElementOfProgression(startNum, step, i));
  }
  return progression;
};

const hideElement = (progressonLength, progression, indOfHidedElement) => {
  const progressionWithHidedElement = [...progression];
  progressionWithHidedElement[indOfHidedElement] = '..';
  return progressionWithHidedElement;
};

const getQuestionAndAnswer = () => {
  const progressonLength = 10;
  const indOfHidedElement = getRandomNum(progressonLength - 1);
  const startNum = getRandomNum(1000);
  const step = getRandomNum(100);

  const progression = getProgression(progressonLength, startNum, step);
  const progressionWithHidedElement = hideElement(progressonLength, progression, indOfHidedElement);
  const question = progressionWithHidedElement.join(' ');

  const answer = getElementOfProgression(startNum, step, indOfHidedElement);

  return [question, String(answer)];
};

const startGame = () => {
  playGame(gameRule, getQuestionAndAnswer);
};

export default startGame;
