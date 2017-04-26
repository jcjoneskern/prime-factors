function factor(num) {
  let result = [];
  const factors = [2, 3, 5, 7];
  let i = 2;

  // while (i < factors.length) {
  //   if (num === factors[i]) {
  //     result.push(factors[i]);
  //     break;
  //   } else if (num % factors[i] === 0) {
  //     result.push(factors[i]);
  //     num /= factors[i];
  //   } else if (factors[i] < 7) {
  //     i++;
  //   } else if ((Math.sqrt(num)) % 1 === 0) {
  //     result.push(Math.sqrt(num));
  //     num = Math.sqrt(num);
  //   } else {
  //     result.push(num);
  //     break;
  //   }
  // }

  // thinking that the first 3 conditions could be done better to check if something is prime

  // better strategy: check if prime; if yes, loop to find factors, else, return number as is

  // for(var i = 2; i <= num; i++) {
  //   if ((num % i) === 0) {
  //     result.push(i);
  //     num /= i;
  //     i = 2;
  //   } else {
  //     result.push(num);
  //     break;
  //   }
  // }


  while (i <= num) {
    if ((num % i) === 0) {
      result.push(i);
      num /= i;
    } else {
      i++;
    }
  }

  // feels like some kind of while loop is needed for anything that has the same factor several times but ???
  // like, restart and keep running until you hit the else line


  return result;
}

module.exports = factor;
