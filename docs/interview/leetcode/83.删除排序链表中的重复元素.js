/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  var dummyHead = new ListNode(null,head)
  var current = dummyHead
  while (current && current.next) {
    if (current.val ===current.next.val) {
      current.next = current.next.next
    }else{
      current = current.next
    }
  }
  return dummyHead.next
};
// @lc code=end

