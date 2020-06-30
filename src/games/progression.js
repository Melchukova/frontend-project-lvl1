import { generateRandomNum } from '../utility.js';
import playGame from '../index.js';

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

const changeItem = (arr, indToChange, newItem = '..') => {
  const changedArr = [...arr];
  changedArr[indToChange] = newItem;
  return changedArr;
};

const generateRoundData = () => {
  const startNum = generateRandomNum(0, 1000);
  const step = generateRandomNum(0, 100);

  const progression = generateProgression(progressonLength, startNum, step);

  const indOfHidedElement = generateRandomNum(0, progression.length - 1);

  const progressionWithHidedElement = changeItem(progression, indOfHidedElement);
  const question = progressionWithHidedElement.join(' ');

  const answer = progression[indOfHidedElement];

  return [question, String(answer)];
};

const startGame = () => {
  playGame(gameRule, generateRoundData);
};

export default startGame;
