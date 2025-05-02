/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length;
  if (len <= 1) {
    return;
  }
  let i = len - 2,
    j = len - 1,
    k = len - 1;
  // 从后往前，找到升序对
  while (i >= 0 && nums[i] >= nums[j]) {
    i--;
    j--;
  }
  // 不是最后一个排列
  if (i >= 0) {
    while (nums[i] >= nums[k]) {
      k--;
    }
    // 找到变换幅度最小的交换
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }
  console.log("🚀🚀🚀wimi======>>>j", j);
  // 交换 [j,end]
  for (let x = j, y = len - 1; x < y; x++, y--) {
    [nums[x], nums[y]] = [nums[y], nums[x]];
  }
};
// @lc code=end
