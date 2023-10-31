function removeNonAlphabet(str) {
  const validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (validChars.includes(char)) {
      result += char;
    }
  }
  return result;
}

const reverse = str => str.split('').reverse().join('');




const palindromes = function(str) {
  str = str.trim();
  str = str.toLowerCase();
  str = removeNonAlphabet(str)
  rev = reverse(str);
  return rev === str;
};

// Do not edit below this line
module.exports = palindromes;
