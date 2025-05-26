/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const arr = new Array(26).fill(0);
  const base = "a".charCodeAt(0);
  for (let i = 0; i < ransomNote.length; i++) {
    let r1 = ransomNote[i].charCodeAt(0);
    arr[r1 - base] = arr[r1 - base] + 1;
  }
  for (let j = 0; j < magazine.length; j++) {
    let m1 = magazine[j].charCodeAt(0);
    if (arr[m1 - base]) {
      arr[m1 - base] = arr[m1 - base] - 1;
    }
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
