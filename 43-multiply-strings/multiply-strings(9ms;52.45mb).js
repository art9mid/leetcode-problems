/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' && num2 === '0') {
    return '0';
  }

  let result = Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let mul = num1[i] * num2[j];
      let sum = mul + result[i + j + 1];

      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  while (result[0] === 0) {
    result.shift();
  }

  return result.join('');
};

console.log(multiply('123456789', '987654321'));
