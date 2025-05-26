/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list2
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // var list = [];
  // var list1CurrentIndex = 0;
  // var list2CurrentIndex = 0;
  // while (list1CurrentIndex < list1.length) {
  //   if (list1[list1CurrentIndex] <= list2[list2CurrentIndex]) {
  //     list.push(list1[list1CurrentIndex]);
  //     list1CurrentIndex++;
  //     if (list1CurrentIndex === list1.length) {
  //       list.push(...list2.slice(list2CurrentIndex));
  //       break;
  //     }
  //   } else {
  //     list.push(list2[list2CurrentIndex]);
  //     list2CurrentIndex++;
  //     if (list2CurrentIndex === list2.length) {
  //       list.push(...list1.slice(list1CurrentIndex));
  //       break;
  //     }
  //   }
  // }
  // return list;

  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// @lc code=end
