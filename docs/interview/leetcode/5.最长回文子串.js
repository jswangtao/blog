/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  // s长度为1，直接返回
  if (len === 1) {
    return s;
  }
  // 构建dp二维数组，初始化默认为false
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(false));
  // 当子串长度为1，都是回文子串，设置为true
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  //返回值
  let ans = s[0];

  // 从长度为2的子串，开始构建状态转移方程
  for (let childLen = 2; childLen <= len; childLen++) {
    // 子串的左边界
    for (let i = 0; i < len; i++) {
      // 子串的右边界
      j = i + childLen - 1;
      // 右边越界
      if (j >= len) {
        break;
      }
      if (childLen === 2) {
        dp[i][j] = s[i] === s[j];
      } else {
        dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      }
      // 更新ans
      if (dp[i][j] && childLen > ans.length) {
        ans = s.slice(i, j + 1);
      }
    }
  }

  return ans;
};
// @lc code=end
