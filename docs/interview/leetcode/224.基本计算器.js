/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // 符号位，默认一个正
  const ops = [1];
  let sign = 1;

  let ret = 0;
  const n = s.length;
  let i = 0;
  while (i < n) {
      if (s[i] === ' ') {
          i++;
      } else if (s[i] === '+') {
          sign = ops[ops.length - 1];
          i++;
      } else if (s[i] === '-') {
          sign = -ops[ops.length - 1];
          i++;
      } else if (s[i] === '(') {
          ops.push(sign);
          i++;
      } else if (s[i] === ')') {
          ops.pop();
          i++;
      } else {
          let num = 0;
           // 去查看当前字符的后一位是否存在
          // 如果操作并且后一位依旧是数字，那么就需要把后面的数字累加上来
          while (i < n && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
              num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
              i++;
          }
          ret += sign * num;
      }
  }
  return ret;
};


// @lc code=end
calculate("(1+(4+5+2)-3)+(6+8)")
