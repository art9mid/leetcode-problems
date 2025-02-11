/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const stringX = String(x);
  for (let i = 0; i < stringX.length; i++) {
    if (stringX[i] !== stringX[stringX.length - 1 - i]) {
      return false;
    }
  }
  return true;
};


console.log(isPalindrome(1000021));
