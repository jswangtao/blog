/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 1.双指针
  // let temp = null,
  //   pre = null,
  //   cur = head;
  // while (cur) {
  //   temp = cur.next;
  //   cur.next = pre;
  //   pre = cur;
  //   cur = temp;
  // }
  // // temp  = cur = null
  // return pre;

  // 2.递归
  var reverse = function (pre, head) {
    if (!head) {
      return pre;
    }
    const temp = head.next;
    head.next = pre;
    pre = head;
    return reverse(pre, temp);
  };
  return reverse(null, head);
};
// @lc code=end
