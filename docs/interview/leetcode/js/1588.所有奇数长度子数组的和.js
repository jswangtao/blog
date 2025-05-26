/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
// var sumOddLengthSubarrays = function (arr) {
//   let ans1 = [];
//   for (let i = 1; i <= arr.length; i = i + 2) {
//     ans1.push(i);
//   }

//   let ans2 = [];
//   for (let j = 0; j < ans1.length; j++) {
//     let a1 = ans1[j];
//     for (let i = 0; i < arr.length; i++) {
//       if (i + a1 <= arr.length) {
//         ans2.push(arr.slice(i, i + a1));
//       }
//     }
//   }
//   let res = 0;
//   for (let i = 0; i < ans2.length; i++) {
//     let ans3 = ans2[i];
//     for (let j = 0; j < ans3.length; j++) {
//       let a1 = ans3[j];
//       res = res + a1;
//     }
//   }
//   return res;
// };

// 滑动窗口
function windows(arr, len) {
  let i = 0;
  let j = 0;
  let sum1 = 0;
  let sum2 = 0;
  while (j < arr.length) {
    sum1 += arr[j];
    if (j - i + 1 === len) {
      sum2 += sum1;
      sum1 -= arr[i];
      i++;
    }
    j++;
  }
  return sum2;
}

var sumOddLengthSubarrays = function (arr) {
  let res = 0;
  for (let i = 1; i <= arr.length; i += 2) {
    res += windows(arr, i);
  }
  return res;
};
// @lc code=end
