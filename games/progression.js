import { generateRandomNum } from '../src/utility.js';
import playGame from '../src/index.js';

const gameRule = 'What number is missing in the progression?';

const calcElementValue = (startNum, step, num) => startNum + step * num;

const generateProgression = (progressonLength, startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressonLength; i += 1) {
    progression.push(calcElementValue(startNum, step, i));
  }
  return progression;
};

const hideElement = (progressonLength, progression, indOfHidedElement) => {
  const progressionWithHidedElement = [...progression];
  progressionWithHidedElement[indOfHidedElement] = '..';
  return progressionWithHidedElement;
};

const generateRoundData = () => {
  const progressonLength = 10;
  const indOfHidedElement = generateRandomNum(progressonLength - 1);
  const startNum = generateRandomNum(1000);
  const step = generateRandomNum(100);

  const progression = generateProgression(progressonLength, startNum, step);
  const progressionWithHidedElement = hideElement(progressonLength, progression, indOfHidedElement);
  const question = progressionWithHidedElement.join(' ');

  const answer = calcElementValue(startNum, step, indOfHidedElement);

  return [question, String(answer)];
};

const startGame = () => {
  playGame(gameRule, generateRoundData);
};

export default startGame;
