/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let resBit = x ^ y; //相同为0，不同为1
  let res = 0;
  while (resBit) {
    resBit &= resBit - 1; //与减一做  与 运算会让二进制最后一位变为 0
    res++; // 统计1的数量
  }
  return res;
};
// @lc code=end
