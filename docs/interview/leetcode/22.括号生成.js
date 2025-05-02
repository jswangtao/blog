/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 递归回溯
var generateParenthesis = function (n) {
  const res = [];
  function backTracing(lRemain, rRemain, str) {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }
    if (lRemain > 0) {
      //如果左括号大于0，就可以调
      backTracing(lRemain - 1, rRemain, str + "(");
    }
    if (lRemain < rRemain) {
      //只有剩余右括号大于剩余左括号 可以添加右括号
      backTracing(lRemain, rRemain - 1, str + ")");
    }
  }
  backTracing(n, n, "");

  return res;
};
// @lc code=end
