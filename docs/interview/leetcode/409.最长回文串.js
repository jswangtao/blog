/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  var ans = "";
  var map = {};
  for (let i = 0; i < s.length; i++) {
    let value = s[i];
    if (map[value] !== undefined) {
      map[value] = undefined;
      ans = value + ans + value;
    } else {
      map[value] = i;
    }
  }
  return ans.length < s.length ? ans.length + 1 : ans.length;
};
// @lc code=end
