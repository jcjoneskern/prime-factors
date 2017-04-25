function factor(num) {
  let result = [];
  const factors = [2, 3, 5, 7];
  let i = 0;

  while (i < factors.length) {
    if (num === factors[i]) {
      result.push(num);
      i++;
    } else if (num % factors[i] === 0) {
      result.push(factors[i]);
      num /= factors[i];
    } else {
      i++;
    }
  }


  return result;
}

module.exports = factor;
