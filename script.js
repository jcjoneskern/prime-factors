function factor(num) {
  let result = [];
  const factors = [2, 3, 5, 7];

  for(var i = 0; i < factors.length; i++) {
    if (num % factors[i] === 0) {
      result.push(factors[i]);
      num /= factors[i];
    } else {
      result.push(num);
    }
  }

  // I feel like I'm getting ahead of myself


  return result;
}

module.exports = factor;
