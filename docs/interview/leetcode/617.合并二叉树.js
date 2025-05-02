/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 */

// @lc code=start

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 || !root2) return root1 || root2;
  function dfs(r1, r2) {
    if (!r1 || !r2) {
      return;
    }
    r1.val = r1.val + (r2 ? r2.val : 0);
    if (!r1.left && r2.left) {
      r1.left = new TreeNode(0);
    }
    if (!r1.right && r2.right) {
      r1.right = new TreeNode(0);
    }
    dfs(r1.left, r2.left);
    dfs(r1.right, r2.right);
  }
  dfs(root1, root2);
  return root1;
};
// @lc code=end
