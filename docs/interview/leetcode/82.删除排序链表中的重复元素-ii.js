/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
  while (current.next && current.next.next) {
    if (current.next.val !==current.next.next.val) {
      current = current.next
    }else{
      var value = current.next.val
      while (current.next) {
        if (current.next.val===value) {
          current.next = current.next.next
        }else{
          break
        }
      }
    }
  }
  return dummyHead.next
};
// @lc code=end

