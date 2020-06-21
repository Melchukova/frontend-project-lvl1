const getRandomNum = (max) => Math.floor(Math.random() * max);

const calcGcd = (a, b) => {
  if (b) {
    return calcGcd(b, a % b);
  }

  return Math.abs(a);
};

export { getRandomNum, calcGcd };
