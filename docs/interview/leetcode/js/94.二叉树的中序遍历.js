/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(
  1,
  undefined,
  new TreeNode(2, new TreeNode(3, undefined, undefined), undefined)
);

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  var arr = [];
  function inorder(node) {
    if (!node) {
      return;
    }
    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  return arr;
};

inorderTraversal(root);
// @lc code=end
