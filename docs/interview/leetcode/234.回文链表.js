/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const head = { val: 1, next: { val: 2, next: null } };
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 复制为数组，双指针法
var isPalindrome = function (head) {
  var arrs = [];
  while (head !== null) {
    arrs.push(head.val);
    head = head.next;
  }
  for (i = 0, j = arrs.length - 1; i < j; i++, j--) {
    if (arrs[i] !== arrs[j]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
