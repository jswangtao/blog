/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = (x+"").split("")
    let z = Number(y.reverse().join(""))
    if (z===x) {
      return true
    }
    return false
};
// @lc code=end
isPalindrome(121)
