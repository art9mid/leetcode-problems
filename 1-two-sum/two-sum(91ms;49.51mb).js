/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum91ms4951mb = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const a = target - nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (a - nums[j] === 0 && i !== j) {
        return [i, j];
      }
    }
  }
  return [];
};

// [3,2,4] 6
console.log(twoSum91ms4951mb([3, 2, 4], 6));
