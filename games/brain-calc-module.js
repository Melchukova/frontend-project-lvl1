const gameRule = 'What is the result of the expression?';

const getRandomNum = (max) => Math.floor(Math.random() * max);

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum(1000);
  const num2 = getRandomNum(1000);
  const operationNum = getRandomNum(3);

  let question = '';
  let result;

  switch (operationNum) {
    case 0:
      question = `${num1} + ${num2}`;
      result = num1 + num2;
      break;
    case 1:
      question = `${num1} - ${num2}`;
      result = num1 - num2;
      break;
    case 2:
    default:
      question = `${num1} * ${num2}`;
      result = num1 * num2;
      break;
  }

  return [question, String(result)];
};

export { gameRule, getQuestionAndAnswer };
