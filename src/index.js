import readlineSync from 'readline-sync';

const ask = (question) => readlineSync.question(`${question} `);
const print = (text) => console.log(text);

const playGame = (gameModule) => {
  print('Welcome to the Brain Games!');
  const userName = ask('May I have your name?');
  print(`Hello, ${userName}!`);

  const rule = gameModule.gameRule;
  print(rule);

  const iterationsAmount = 3;
  let iterationNum = 0;
  let correct = true;

  while (iterationNum < iterationsAmount && correct) {
    iterationNum += 1;

    const [question, correctAnswer] = gameModule.getQuestionAndAnswer();

    print(`Question: ${question}`);
    const userAnswer = ask('Your answer:');
    if (userAnswer === correctAnswer) {
      print('Correct!');
    } else {
      correct = false;
      print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    }
  }

  if (correct) {
    print(`Congratulations, ${userName}!`);
  } else {
    print(`Let's try again, ${userName}!`);
  }
};

export default playGame;
