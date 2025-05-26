/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var map = new Map();
  for (const str of strs) {
    var arr = Array.from(str);
    arr.sort();
    var key = arr.toString();
    var list = map.get(key) ? map.get(key) : new Array();
    list.push(str);
    map.set(key, list);
  }

  return Array.from(map.values());
};
// @lc code=end
