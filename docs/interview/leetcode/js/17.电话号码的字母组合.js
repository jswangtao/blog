/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  const map = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const len = digits.length;
  const res = [],
    path = [];

  function backtracking(n, key) {
    if (path.length === len) {
      res.push(path.join(""));
      return;
    }

    for (const i of map[n[key]]) {
      path.push(i);
      backtracking(n, key + 1);
      path.pop();
    }
  }
  backtracking(digits, 0);
  return res;
};
// @lc code=end
