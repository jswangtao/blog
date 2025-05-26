/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      max++;
    } else {
      ans = Math.max(ans, max);
      max = 0;
    }
  }
  return Math.max(ans, max);
};
// @lc code=end
