import { generateRandomNum } from '../src/utility.js';
import playGame from '../src/index.js';

const gameRule = 'What number is missing in the progression?';
const progressonLength = 10;

const generateProgression = (progressonLen, startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressonLen; i += 1) {
    const element = startNum + step * i;
    progression.push(element);
  }
  return progression;
};

const hideElement = (progression, indOfHidedElement) => {
  const replacementString = '..';
  const progressionWithHidedElement = [...progression];
  progressionWithHidedElement[indOfHidedElement] = replacementString;
  return progressionWithHidedElement;
};

const generateRoundData = () => {
  const startNum = generateRandomNum(1000);
  const step = generateRandomNum(100);

  const progression = generateProgression(progressonLength, startNum, step);

  const indOfHidedElement = generateRandomNum(progression.length - 1);

  const progressionWithHidedElement = hideElement(progression, indOfHidedElement);
  const question = progressionWithHidedElement.join(' ');

  const answer = progression[indOfHidedElement];

  return [question, String(answer)];
};

const startGame = () => {
  playGame(gameRule, generateRoundData);
};

export default startGame;
