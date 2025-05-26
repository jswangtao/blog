/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  var arr = path.split("/");
  var stack = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "..") {
      stack.pop();
    } else {
      if (arr[i] !== "" && arr[i] !== ".") {
        stack.push(arr[i]);
      }
    }
  }

  return "/" + stack.join("/");
};
// @lc code=end
