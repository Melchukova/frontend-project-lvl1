import readlineSync from 'readline-sync';

const iterationsAmount = 3;
const ask = (question) => readlineSync.question(`${question} `);
const print = (text) => console.log(text);

const playGame = (gameRule, getQuestionAndAnswer) => {
  print('Welcome to the Brain Games!');
  const userName = ask('May I have your name?');
  print(`Hello, ${userName}!`);

  print(gameRule);

  for (let i = 0; i < iterationsAmount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    print(`Question: ${question}`);
    const userAnswer = ask('Your answer:');

    if (userAnswer !== correctAnswer) {
      print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      print(`Let's try again, ${userName}!`);
      return;
    }

    print('Correct!');
  }

  print(`Congratulations, ${userName}!`);
};

export default playGame;
