/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  // 对应字符串s、t的保存map
  let S = new Map()
  let T = new Map()
  // 开始循环字符串，这里题目就假定s、t的长度相等
  for(let i = 0; i < s.length; i++) { 
    // 当s、t出现了重复字符的话   
    if(S.has(s[i]) || T.has(t[i]))  {
        // 当出现了重复字符，就比较之前存的index 相同就继续，不同就返回false，跳出循环
        if(S.get(s[i]) !== T.get(t[i])) return false
    }
    // 保存下当前位的字符和index  
    S.set(s[i],i)
    T.set(t[i],i)
  }
  return true
}


// @lc code=end
