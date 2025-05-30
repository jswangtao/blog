/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummyHead = new ListNode(null, head);
  let pre = dummyHead;
  let cur = head;
  let temp = null;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
    cur = cur.next;
  }
  for (let i = 0; i < right - left; i++) {
    temp = cur.next;
    cur.next = temp.next;
    temp.next = pre.next;
    pre.next = temp;
  }
  return dummyHead.next;
};
// @lc code=end
