/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var stack = [];
  var maxLength = 0,
    start = 0;
  for (let i = 0; i < s.length; i++) {
    //  如果是左括号就存起来
    if (s[i] === "(") {
      stack.push(i);
    } else {
      // 如果当前栈为空，则说明没有左括号匹配，则重新设置start
      if (stack.length === 0) {
        start = i + 1;
      } else {
        stack.pop();
        if (stack.length === 0) {
          maxLength = Math.max(maxLength, i - start + 1);
        } else {
          maxLength = Math.max(maxLength, i - stack[stack.length-1]);
        }
      }
    }
  }
  return maxLength;
};
// @lc code=end

longestValidParentheses("(()");
