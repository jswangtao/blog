/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 双指针
var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  num2 = nums2.sort((a, b) => a - b);
  var l = 0,
    r = 0,
    ans = [];
  while (l < nums1.length && r < nums2.length) {
    if (nums1[l] === nums2[r]) {
      ans.push(nums1[l]);
      l++;
      r++;
    } else {
      nums1[l] > nums2[r] ? r++ : l++;
    }
  }
  return ans;
};

// @lc code=end
