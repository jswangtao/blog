/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let answer = [];
  let r = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = r;
    r *= nums[i];
  }
  r = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    answer[j] = answer[j] * r;
    r *= nums[j];
  }

  return answer;
};
// @lc code=end
