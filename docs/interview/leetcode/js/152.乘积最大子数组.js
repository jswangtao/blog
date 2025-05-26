/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxProduct = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let max = 1;
    for (let j = i; j < nums.length; j++) {
      max = max * nums[j];
      if (max > maxProduct) {
        maxProduct = max;
      }
    }
  }
  return maxProduct;
};

maxProduct([2, 3, -2, 4]);
// @lc code=end
