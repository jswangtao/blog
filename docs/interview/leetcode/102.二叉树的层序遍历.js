/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ret = [];
  if (!root) {
    return [];
  }
  let p = [];
  p.push(root);
  while (p.length) {
    // 关键点
    const currentLevelSize = p.length;
    let res = [];
    // 不能 i < p.length
    for (let i = 0; i < currentLevelSize; i++) {
      let node = p.shift();
      res.push(node.val);
      if (node.left) {
        p.push(node.left);
      }
      if (node.right) {
        p.push(node.right);
      }
    }
    ret.push(res);
  }
  return ret;
};
// @lc code=end
