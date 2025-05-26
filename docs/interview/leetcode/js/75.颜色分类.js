/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // return quick(nums, 0, nums.length - 1);
  return nums.sort((a, b) => a - b);
};

var quick = function (arr, left, right) {
  let index;
  if (left < right) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quick(arr, left, index - 1);
    }
    if (index > right) {
      quick(arr, index, right);
    }
  }
  return arr;
};

var partition = function (arr, left, right) {
  var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left];
  i = left;
  j = right;
  while (i <= j) {
    while (arr[i] < datum) {
      i++;
    }
    while (arr[j] > datum) {
      j--;
    }
    if (i < j) {
      swap(arr, i, j);
      i += 1;
      j -= 1;
    }
  }
  return i;
};
var swap = function (arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
// @lc code=end
