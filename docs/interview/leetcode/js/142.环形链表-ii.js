/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  while (head) {
    // 如果访问过就是第一个入环的地方
    if (head.visited) {
      return head;
    }
    // 给已访问的节点打标记
    head.visited = true;
    // 递归遍历
    head = head.next;
  }
  // 没有环输出null
  return null;
};
// @lc code=end
