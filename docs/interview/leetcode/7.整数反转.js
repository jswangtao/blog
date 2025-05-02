/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const x2str = x.toString()
  let arr = []
  for (let index = 0; index < x2str.length; index++) {
    arr.push(x.toString().substring(index, index + 1))
  }

  if (arr[0] === '-') {
    arr.shift()
    arr.reverse()
    arr.unshift('-')
    return arr.join('')
  } else if (arr[arr.length - 1] === 0) {
    arr.pop()
    arr.reverse()
    return arr.join('')
  } else if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) {
    return 0
  } else {
    return arr.reverse().join('')
  }
}
// @lc code=end

