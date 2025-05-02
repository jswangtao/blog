/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  var maxLen = 0;
  var len = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      len += 1;
    } else if (s[i] === ")") {
      len -= 1;
    }
    maxLen = Math.max(maxLen, len);
  }
  return maxLen;
};
// @lc code=end
