/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 1.暴力求解
// var intersection = function (nums1, nums2) {
//   var arr = [];
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums2[j]) {
//         arr.push(nums2[j]);
//       }
//     }
//   }
//   arr = [...new Set(arr)];
//   return arr;
// };

// 2.new Set去重求解
// var intersection = function (nums1, nums2) {
//   return [...new Set(nums1)].filter((item) => {
//     if (new Set(nums2).has(item)) {
//       return true;
//     }
//   });
// };

// 3.先遍历第一个数组，将其存到 hashtable 中，然后遍历第二个数组，如果在 hashtable 中存在就 push 到 ret，然后清空 hashtable，最后返回 ret 即可。
var intersection = function (nums1, nums2) {
  const visited = {};
  const ret = [];
  for (let i = 0; i < nums1.length; i++) {
    visited[nums1[i]] = nums1[i];
  }
  for (let j = 0; j < nums2.length; j++) {
    if (visited[nums2[j]] !== undefined) {
      ret.push(nums2[j]);
      visited[nums2[j]] = undefined;
    }
  }
  return ret;
};
// @lc code=end
