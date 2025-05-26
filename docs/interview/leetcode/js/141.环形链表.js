/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// 循环访问
/* var hasCycle = function (head) {
  while (head) {
    if (head.visited) {
      return true;
    }
    head.visited = true;
    head = head.next;
  }
  return false;
}; */

// 快慢指针
var hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false;
  }
  var slow = head;
  var fast = head.next;
  while (fast) {
    if (slow === fast) {
      return true;
    }
    if (!fast.next) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  // return false;
};
// @lc code=end
