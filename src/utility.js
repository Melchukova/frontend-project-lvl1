const getRandomNum = (max) => Math.floor(Math.random() * max);

const tranclatePredicate = (answer) => {
  switch (answer) {
    case true:
      return 'yes';
    case false:
      return 'no';
    default:
      return undefined;
  }
};

export { getRandomNum, tranclatePredicate };
