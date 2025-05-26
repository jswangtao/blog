/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 必须到达end下标的数字
  let end = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= end - i) {
      end = i;
    }
  }
  return end === 0;
};
// @lc code=end
