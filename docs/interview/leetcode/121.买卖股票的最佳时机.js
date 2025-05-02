/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/* var maxProfit = function (prices) {
  var maxDiff = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxDiff) {
        maxDiff = prices[j] - prices[i];
      }
    }
  }
  return maxDiff;
}; */

var maxProfit = function (prices) {
  var maxDiff = 0;
  var minValue = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minValue) {
      minValue = prices[i];
    }
    if (prices[i] - minValue > maxDiff) {
      maxDiff = prices[i] - minValue;
    }
  }
  return maxDiff;
};
// @lc code=end
