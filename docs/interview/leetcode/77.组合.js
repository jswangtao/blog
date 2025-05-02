/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const path = [];
  function backTracking(n, k, stackIndex) {
    if (path.length === k) {
      res.push(path.slice());
      return;
    }
    for (let i = stackIndex; i <= n; i++) {
      path.push(i);
      backTracking(n, k, i + 1);
      path.pop();
    }
  }
  backTracking(n, k, 1);
  return res;
};
// @lc code=end
