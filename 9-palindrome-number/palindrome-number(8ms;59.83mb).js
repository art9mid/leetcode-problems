/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let reversedX = '';

  for (let i = String(x).length - 1; i >= 0; i--) {
    reversedX += String(x)[i];
  }

  return reversedX === String(x);
};


console.log(isPalindrome(-121));
