function factor(num) {
  let result = [];
  let i = 2;

  do {
    if (num === 1 || num === 0) {
      result.push("n/a");
      break;
    } else if ((num % i) === 0) {
      result.push(i);
      num /= i;
    } else {
      i++;
    }
  } while (i <= num);

  return result.sort(function(a, b) {
    return a-b;
  });
}

module.exports = factor;
