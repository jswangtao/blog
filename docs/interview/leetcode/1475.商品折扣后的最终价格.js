/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  let ans = []
  for (let i = 0; i < prices.length; i++) {
    let v1 = prices[i];
    for (let j = i+1; j < prices.length+1; j++) {
      let v2 = prices[j];
      if (v2<=v1) {
        ans[i] =v1-v2
        break
      }else{
        ans[i] =v1
      }
    }
  }
  return ans
};
// @lc code=end

