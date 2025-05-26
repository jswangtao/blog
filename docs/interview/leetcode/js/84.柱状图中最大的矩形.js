/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [];
  heights = [0, ...heights, 0];
  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {// 当前bar比栈顶bar矮
      const stackTopIndex = stack.pop(); // 栈顶元素出栈，并保存栈顶bar的索引
        // 计算出栈的bar形成的长方形面积
      const currentArea = heights[stackTopIndex] * (i - stack[stack.length - 1] - 1) 
      maxArea = Math.max(// 计算面积，并挑战最大面积
        maxArea,
        currentArea
      );
    }
     // 当前bar比栈顶bar高了，入栈
    stack.push(i)
  }
  return maxArea
};
// @lc code=end


// 基本思维跟接雨水有点类似，先分组，让他始终递增，在递增里面，最大面积 = 当前高 * 当前宽

// 比较求出最大

largestRectangleArea([2,1,5,6,2,3])