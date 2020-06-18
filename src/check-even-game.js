import readlineSync from 'readline-sync';

const ask = (question) => readlineSync.question(`${question} `);
const print = (text) => console.log(text);

const tranclateAnswer = (answer) => {
  switch (answer) {
    case 0:
      return 'yes';
    case 1:
      return 'no';
    default:
      return undefined;
  }
};

const playGame = () => {
  const iterationsAmount = 3;
  const maxRandomValue = 100;

  print('Welcome to the Brain Games!');
  const userName = ask('May I have your name?');
  print(`Hello, ${userName}!`);

  print('Answer "yes" if the number is even, otherwise answer "no".');
  let iterationNum = 0;
  let correct = true;

  while (iterationNum < iterationsAmount && correct) {
    iterationNum += 1;

    const randomVal = Math.floor(Math.random() * maxRandomValue);

    print(`Question: ${randomVal}`);
    const userAnswer = ask('Your answer:');
    const correctAnswer = randomVal % 2;
    const correctAnswerStr = tranclateAnswer(correctAnswer);

    if (userAnswer === correctAnswerStr) {
      print('Correct!');
    } else {
      correct = false;
      print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswerStr}".`);
    }
  }

  if (correct) {
    print(`Congratulations, ${userName}!`);
  } else {
    print(`Let's try again, ${userName}!`);
  }
};

export default playGame;
