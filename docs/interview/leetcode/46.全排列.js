/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(arr) {
  const res = [];
  const path = [];
  const used = new Array(arr.length).fill(false);

  function backTracking(nums) {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        backTracking(nums);
        path.pop();
        used[i] = false;
      }
    }
  }

  backTracking(arr);
  return res;
}
// @lc code=end
