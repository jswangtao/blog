/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 构造一个虚拟头节点，特殊情况的判断
  let dummyHead = new ListNode(null, head);
  let fast = (slow = dummyHead);
  // 倒着看，fast先走n+1步，slow再走，当fast走到最后一个节点时，slow的下一个节点就是要删除的节点
  for (i = 0; i < n + 1; i++) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
};
// @lc code=end
