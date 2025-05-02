/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i <= n; i++) {
    let val = i * i;
    for (let j = val; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - val] + 1);
    }
  }
  return dp[n];
};
// @lc code=end
