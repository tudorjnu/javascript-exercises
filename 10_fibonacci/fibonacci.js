const fibonacci = function(n) {
  if (n < 0) {
    return "OOPS";
  }
  if (typeof n === String) {
    n = parseInt(n);
  }

  function fibonacci(n0, n1, n) {
    if (n == 1) {
      return n0;
    } else {
      return fibonacci(n1, n0 + n1, n - 1);
    }
  }
  return fibonacci(1, 1, n)
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
