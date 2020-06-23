import readlineSync from 'readline-sync';

const iterationsAmount = 3;
const ask = (question) => readlineSync.question(`${question} `);
const print = (text) => console.log(text);

const playGame = (gameRule, getQuestionAndAnswer) => {
  print('Welcome to the Brain Games!');
  const userName = ask('May I have your name?');
  print(`Hello, ${userName}!`);

  if (!gameRule) return;

  print(gameRule);

  let iterationNum = 0;
  let correct = true;

  do {
    iterationNum += 1;
    const [question, correctAnswer] = getQuestionAndAnswer();
    print(`Question: ${question}`);
    const userAnswer = ask('Your answer:');

    if (userAnswer === correctAnswer) {
      print('Correct!');
    } else {
      print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      correct = false;
    }
  } while (iterationNum < iterationsAmount && correct);

  if (correct) {
    print(`Congratulations, ${userName}!`);
  } else {
    print(`Let's try again, ${userName}!`);
  }
};

export default playGame;
