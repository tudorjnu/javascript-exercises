const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(ls) {
  result = 0;
  ls.forEach((element) => {
    result += element;
  });
  return result;
};

const multiply = function(ls) {
  result = 1;
  ls.forEach((element) => {
    result *= element;
  });
  return result;
};

const power = function(a, b) {
  result = a;
  for (i = 1; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  result = 1;
  for (i = 1; i < a + 1; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
