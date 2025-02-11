/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2ms5168mb = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const a = target - nums[i]; // 2
    if (map.has(a)) {
      return [map.get(a), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

// [3,2,4] 6
console.log(twoSum2ms5168mb([3, 2, 4], 6));
