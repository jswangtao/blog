/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   var l = 0;
//   for (let i = 0; i < nums.length; i++) {
//     l++;
//     if (nums[i] === 0) {
//       nums.push(nums[i]);
//       nums.splice(i, 1);
//       i--;
//     }
//     if (l > nums.length - 1) {
//       break;
//     }
//   }
// };

var moveZeroes = function (nums) {
  let l = 0,
    i = 0;
  while (l < nums.length) {
    if (nums[i] === 0) {
      nums.push(nums[i]);
      nums.splice(i, 1);
    } else {
      i++;
    }
    l++;
  }
};

moveZeroes([0, 1, 0, 3, 12]);
// @lc code=end
