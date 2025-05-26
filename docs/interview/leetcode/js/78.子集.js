/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 递归回溯
var subsets = function (nums) {
  let res = [];
  function backTracking(index, list) {
    if (index === nums.length) {
      //考察完毕
      res.push(list.slice()); //推入解
      return;
    }
    list.push(nums[index]); //选择
    backTracking(index + 1, list); //考察下一个数是否选择
    list.pop(); //不选择
    backTracking(index + 1, list); //考察下一个数是否选择
  }
  backTracking(0, []);
  return res;
};
// @lc code=end
