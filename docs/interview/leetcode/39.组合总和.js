/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [],
    path = [];
  function backtracking(j, sum) {
    if (sum > target) return;
    if (sum === target) {
      res.push(path.slice());
      return;
    }

    for (let i = j; i < candidates.length; i++) {
      const n = candidates[i];
      // 剪枝
      if (n > target - sum) {
        continue;
      }
      path.push(n);
      sum += n;
      backtracking(i, sum);
      path.pop();
      sum -= n;
    }
  }
  backtracking(0, 0);
  return res;
};
// @lc code=end
