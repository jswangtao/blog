/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  var res = 0;

  function maxDep(root) {
    if (!root) {
      return 0;
    }
    var left = maxDep(root.left);
    var right = maxDep(root.right);
    res = Math.max(res, left + right);
    return Math.max(left, right) + 1;
  }
  maxDep(root);
  return res;
};
// @lc code=end
