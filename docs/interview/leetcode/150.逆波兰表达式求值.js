/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  var stack = [];
  var map = {
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
  };

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (map[token]) {
      var  right= stack.pop();
      var left = stack.pop();
      switch (map[token]) {
        case "+":
          stack.push(left + right);
          break;
        case "-":
          stack.push(left - right);
          break;
        case "*":
          stack.push(left * right);
          break;
        case "/":
          stack.push(left / right>0 ?Math.floor(left / right) :Math.ceil(left / right));
          break;
      }
    } else {
      stack.push(Number(token));
    }
  }
  return Math.round(stack.pop())
};

// @lc code=end
