/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let str1 = s.slice(0, i) + s.slice(i + 1, s.length);
    if (str1.indexOf(s[i]) === -1) {
      return i;
    }
  }
  return -1;
};
// @lc code=end
