import readlineSync from 'readline-sync';

const ask = (question) => readlineSync.question(`${question} `);
const print = (text) => console.log(text);

const printGreetingAndGetUserName = () => {
  print('Welcome to the Brain Games!');
  const userName = ask('May I have your name?');
  print(`Hello, ${userName}!`);
  return userName;
};

const isGameIterationCorrect = (gameModule) => {
  const [question, correctAnswer] = gameModule.getQuestionAndAnswer();

  print(`Question: ${question}`);
  const userAnswer = ask('Your answer:');

  if (userAnswer === correctAnswer) {
    print('Correct!');
    return true;
  }

  print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

const printGameResult = (isWin, userName) => {
  if (isWin) {
    print(`Congratulations, ${userName}!`);
  } else {
    print(`Let's try again, ${userName}!`);
  }
};

const playGame = (gameModule) => {
  const userName = printGreetingAndGetUserName();

  const rule = gameModule.gameRule;
  print(rule);

  const iterationsAmount = 3;
  let iterationNum = 0;
  let correct = true;

  do {
    iterationNum += 1;
    correct = isGameIterationCorrect(gameModule);
  } while (iterationNum < iterationsAmount && correct);

  printGameResult(correct, userName);
};

export default playGame;
