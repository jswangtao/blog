/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   // nums.sort((a, b) => a - b);
//   // return nums[nums.length - k];
// };
// @lc code=end

let quickSort = (arr) => {
  quick(arr, 0, arr.length - 1);
};

let quick = (arr, left, right) => {
  let index;
  if (left < right) {
    // 划分数组
    index = partition(arr, left, right);
    if (left < index - 1) {
      quick(arr, left, index - 1);
    }
    if (index < right) {
      quick(arr, index, right);
    }
  }
};

// 一次快排
let partition = (arr, left, right) => {
  // 取中间项为基准
  var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
    i = left,
    j = right;
  // 开始调整
  while (i <= j) {
    // 左指针右移
    while (arr[i] < datum) {
      i++;
    }

    // 右指针左移
    while (arr[j] > datum) {
      j--;
    }

    // 交换
    if (i <= j) {
      swap(arr, i, j);
      i += 1;
      j -= 1;
    }
  }
  return i;
};

// 交换
let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// 测试
let arr = [1, 3, 2, 5, 4];
quickSort(arr);
console.log(arr); // [1, 2, 3, 4, 5]
// 第 2 个最大值
console.log(arr[arr.length - 2]); // 4

// findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log("🚀🚀🚀wimi======>>>11");
