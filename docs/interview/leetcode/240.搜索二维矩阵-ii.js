/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let arrIn = matrix[i];
    for (let j = 0; j < arrIn.length; j++) {
      if (target === arrIn[j]) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
