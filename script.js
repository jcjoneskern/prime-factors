function factor(num) {
  let result = [];
  const factors = [2, 3, 5, 7];
  let i = 0;

  /*
  okay, what are you actually doing?
  is the number 2 or 3 or 5 or 7?
    yes: stop everything and push that. you're done
    no: is the number divisible by 2?
      yes: divide by 2, then check again
      no: is the number divisible by 3?
          yes: divide by 3, then check again
          no: is the number divisible by 5?
            yes: divide by 5, then check again
            no: is the number divisible by 7?
              yes: divide by 7, then check again
              no: give up, return that number, you're done
  */

  while (i < factors.length) {
    if (num === factors[i]) {
      result.push(factors[i]);
      break;
    } else if (num % factors[i] === 0) {
      result.push(factors[i]);
      num /= factors[i];
    } else if (factors[i] < 7) {
      i++;
    } else if ((Math.sqrt(num)) % 1 !== 0) {
      result.push(Math.sqrt(num));
      num = Math.sqrt(num);
    } else {
      result.push(num);
      break;
    }
  }


  return result;
}

module.exports = factor;
