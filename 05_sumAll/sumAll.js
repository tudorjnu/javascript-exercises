const sumAll = function(lowInt, highInt) {
  switch (true) {
    case lowInt < 0 || highInt < 0:
      return "ERROR";
    case typeof lowInt !== 'number' || typeof highInt !== 'number':
      return "ERROR";
    case highInt < lowInt:
      [lowInt, highInt] = [highInt, lowInt];
      break;
    default:
      break;
  }
  let sum = 0;
  for (i = lowInt; i <= highInt; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
