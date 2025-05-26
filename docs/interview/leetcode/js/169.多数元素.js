/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 摩尔投票法
var majorityElement = function (nums) {
  var cand_num = nums[0],
    count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === cand_num) {
      ++count;
    } else {
      --count;
      if (count === 0) {
        cand_num = nums[i + 1];
      }
    }
  }
  return cand_num;
};
// @lc code=end
