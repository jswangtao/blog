/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function check(u, v) {
    var arr1 = [];
    // var arr2 = [];

    arr1.push(u);
    arr1.push(v);
    // arr2.push(v);
    while (arr1.length) {
      var u1 = arr1.shift();
      var v1 = arr1.shift();

      if (!u1 && !v1) {
        return true;
      }
      if (!u1 || !v1 || u1.val !== v1.val) {
        return false;
      }

      if (u1.val !== v1.val) {
        return false;
      }
      if (u1.left) {
        arr1.push(u1.left);
        arr1.push(v1.right);
      }
      if (u1.right) {
        arr1.push(u1.right);
        arr1.push(v1.left);
      }
    }
    return true;
  }
  return check(root, root);
};
// @lc code=end
