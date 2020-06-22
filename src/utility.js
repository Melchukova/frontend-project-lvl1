const getRandomNum = (max) => Math.floor(Math.random() * max);

const calcGcd = (a, b) => {
  if (b) {
    return calcGcd(b, a % b);
  }

  return Math.abs(a);
};

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

const checkPrime = (num) => {
  if (num === 1) return false;

  for (let i = 0; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

export {
  getRandomNum, calcGcd, tranclatePredicate, checkPrime,
};
