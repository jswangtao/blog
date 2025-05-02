/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  console.log("🚀🚀🚀wimi======>>>height", height);
  var i = 0,
    j = height.length - 1,
    res = 0;
  while (i < j) {
    if (height[i] < height[j]) {
      res = Math.max(height[i] * (j - i), res);
      i++;
    } else {
      res = Math.max(height[j] * (j - i), res);
      j--;
    }
  }
  return res;
};
// @lc code=end
