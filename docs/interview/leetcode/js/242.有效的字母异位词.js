/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let s1 = s[i];
    let index = s1.charCodeAt(0) - 97;
    arr[index] = arr[index] + 1;
  }
  for (let j = 0; j < t.length; j++) {
    let t1 = t[j];
    let index = t1.charCodeAt(0) - 97;
    arr[index] = arr[index] - 1;
  }
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    let a1 = arr[i];
    if (a1 !== 0) {
      flag = false;
    }
  }
  return flag;
};
// @lc code=end
isAnagram("rat", "car");
