function factor(num) {
  let result = [];
  const factors = [2, 3, 5, 7];
  let i = 0;

  while (i < factors.length) {
    if (num === factors[i]) {
      result.push(factors[i]);
      break;
    } else if (num % factors[i] === 0) {
      result.push(factors[i]);
      num /= factors[i];
    } else if (factors[i] < 7) {
      i++;
    } else if ((Math.sqrt(num)) % 1 === 0) {
      result.push(Math.sqrt(num));
      num = Math.sqrt(num);
    } else {
      result.push(num);
      break;
    }
  }

  // thinking that the first 3 conditions could be done better to check if something is prime

  return result;
}

module.exports = factor;
