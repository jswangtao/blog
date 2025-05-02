/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function (temperatures) {
//   let nums = [];
//   for (let i = 0; i < temperatures.length; i++) {
//     for (let j = i; j < temperatures.length; j++) {
//       if (temperatures[i] < temperatures[j]) {
//         nums.push(j - i);
//         break;
//       }
//       if (j === temperatures.length - 1) {
//         nums.push(0);
//       }
//     }
//   }

//   return nums;
// };

// 单调递增栈
var dailyTemperatures = function (temperatures) {
 var stack = [];
 var res = new Array(temperatures.length).fill(0)
 for (let i = 0; i < temperatures.length; i++) {
   while (stack.length>0 && temperatures[i]>temperatures[stack[stack.length-1]]) {
    var preInex = stack.pop()
    res[preInex] = i-preInex
   }
   stack.push(i)
 }
 return res
};
// @lc code=end
