/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let ans = [];
  for (i = 0; i <= n; i++) {
    let j = i;
    let cur = 0;
    while (j) {
      j &= j - 1;
      cur++;
    }
    ans.push(cur);
  }
  return ans;
};
// @lc code=end
