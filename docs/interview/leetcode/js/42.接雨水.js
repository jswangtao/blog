/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 一开始水的面积
  var result = 0;
  // 存储height的下标
  var stack = [];
  for (let i = 0; i < height.length; i++) {
    // 如果元素大于栈顶元素，有可能形成凹槽
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      let bottom =  stack.pop();
      // 没有左侧了
      if (!stack.length) {
        break;
      }
      // 凹槽左侧的高度 和 凹槽右侧的高度 height[i]
      // 这两者的最小值减去凹槽底部的高度就是凹槽的高度
      const left = stack[stack.length - 1];
      var h = Math.min(height[left], height[i]) - height[bottom];
      // 凹槽宽度
      var w = i - left - 1;
      result += h * w;
    }
    // 栈中和此时的元素可以形成栈的情况在上述 while 循环中都已经判断了
    // 那么，此时栈中的元素必然不可能大于此时的元素，所以可以把此时的元素添加到栈中
    stack.push(i);
  }
  return result;
};
// @lc code=end

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
