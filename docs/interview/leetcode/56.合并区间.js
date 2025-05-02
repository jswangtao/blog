/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  let cure = null;
  for (let i = 1; i < intervals.length; i++) {
    cure = intervals[i];
    if (prev[1] >= cure[0]) {
      prev[1] = Math.max(prev[1], cure[1]);
    } else {
      res.push(prev);
      prev = cure;
    }
  }
  res.push(prev);
  return res;
};

merge([
  [1, 4],
  [4, 5],
]);
// @lc code=end
