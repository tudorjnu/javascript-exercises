const repeatString = function(str, num) {
  if (num < 0) {
    return "ERROR"
  }
  let new_string = "";
  for (i = 0; i < num; i++) {
    new_string += str
  }
  return new_string;
};

// Do not edit below this line
module.exports = repeatString;
