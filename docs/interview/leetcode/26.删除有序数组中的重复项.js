/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let current = nums[0],
    i = 1;
  while (i < nums.length) {
    if (nums[i] === current) {
      nums.splice(i, 1);
    } else {
      current = nums[i];
      i++;
    }
  }
  return nums.length;
};

// @lc code=end
