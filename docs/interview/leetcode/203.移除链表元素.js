/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummyHead = new ListNode(null, head);
  let pre = dummyHead;
  while (head) {
    if (head.val === val) {
      pre.next = head.next;
    } else {
      pre = pre.next;
    }
    head = head.next;
  }
  return dummyHead.next;
};
// @lc code=end
