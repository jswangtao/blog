/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 1. 层序遍历出来去长度
/* var maxDepth = function (root) {
  var ret = [];
  if (!root) {
    return ret;
  }

  var q = [];
  q.push(root);
  while (q.length) {
    const currentLevelSize = q.length;
    ret.push([]);
    for (let i = 0; i < currentLevelSize; i++) {
      var node = q.shift();
      ret[ret.length - 1].push(node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }
  console.log("🚀🚀🚀wimi======>>>ret", ret);
  return ret.length;
}; */

// 2. 递归
var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    return Math.max(left, right) + 1;
  }
};
// @lc code=end
