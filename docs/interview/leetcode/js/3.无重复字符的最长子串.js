/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值-1 相当于在字符串左边界左侧，还没有移动
  let rk = 0,
    ans = 0;
  for (let i = 0; i < n; i++) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1));
    }
    while (rk < n && !occ.has(s.charAt(rk))) {
      // 不断移动右指针
      occ.add(s.charAt(rk));
      ++rk;
    }
    // 记录第i到rk个字符的最长
    ans = Math.max(ans, rk - i);
  }
  return ans;
};
// @lc code=end
