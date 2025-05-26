/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  var set = new Set(nums);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let cur = nums[i];
      let count = 1;
      while (set.has(cur + 1)) {
        cur++;
        count++;
      }
      max = Math.max(count, max);
    }
  }
  return max;
};
// @lc code=end
