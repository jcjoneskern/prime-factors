function factor(num) {
  let result = [];
  const factors = [2, 3, 5, 7];

  for(var i = 0; i < factors.length; i++) {
    if (num % factors[i] === 0) { //if the number is divisible by any arbitrary number in the array
      // okay but what if the number is a factor?
      result.push(factors[i]);
      num /= factors[i];
    } else if (/*???*/) {
      // should push the number into the array once all the factors are out
      result.push(num);
    }
  }

  // I feel like I'm getting ahead of myself


  return result;
}

module.exports = factor;
