/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  var m1 = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  var arr1 = [];
  for (var i = 0; i < s.length; i++) {
    if (m1[s[i]]) {
      arr1.push(s[i]);
    } else {
      if (m1[arr1.pop()] !== s[i]) {
        return false;
      }
    }
  }

  return arr1.length === 0;
};
// @lc code=end
