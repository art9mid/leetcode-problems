/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const obj = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (obj.get(s[i]) < obj.get(s[i + 1])) {
      result += obj.get(s[i + 1]) - obj.get(s[i]);
      i++;
      continue;
    }
    result += obj.get(s[i]);
  }
  return result;
};

console.log(romanToInt('MCMXCIV'));
