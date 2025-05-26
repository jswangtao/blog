/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var ans = 0;
  for (const num of nums) {
    ans = ans ^ num;
  }
  return ans;
};
// @lc code=end
