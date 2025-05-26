/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let buy = -prices[0]; //手中有股票
  let sell = 0; //没有股票
  let profit_freeze = 0;
  for (let i = 1; i < n; i++) {
    let temp = sell;
    sell = Math.max(sell, buy + prices[i]);
    buy = Math.max(buy, profit_freeze - prices[i]);
    profit_freeze = temp;
  }
  return sell;
};
// @lc code=end
