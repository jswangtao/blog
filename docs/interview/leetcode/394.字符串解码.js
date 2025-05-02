/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 类似逆波兰求值
var decodeString = function (s) {
  var stack = []
  for(let i = 0; i<s.length;i++){
    if (s[i]!==']') {
      stack.push(s[i])
    }else{
      let num =''
      let str =''
      let c = stack.pop()
      while (c !=='[') {
        str = c+str
        c = stack.pop()
      }
      c = stack.pop()
      while (c>='0' && c<='9') {
        num = c+num
        c = stack.pop()
      }
      stack.push(c)
      stack.push(str.repeat(Number(num)))
    }
  }
  return stack.join("")
};


// @lc code=end
