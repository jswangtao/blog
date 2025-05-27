// 将数字每千分位隔开
// 12323.3333  => 12,323.3333

// 1.循环
// function format(num) {
//   let intStr = num.toString().split(".")[0];
//   let decimalStr = num.toString().split(".")[1] || "";
//   let intArr = intStr.split("");

//   let result = [];
//   for (let i = intArr.length - 1; i >= 0; i--) {
//     if ((intArr.length - 1 - i) % 3 === 0 && i !== intArr.length - 1) {
//       result.unshift(",");
//       result.unshift(intArr[i]);
//     } else {
//       result.unshift(intArr[i]);
//     }
//   }
//   return result.join("") + "." + decimalStr;
// }


// 正则，零宽匹配
function format(num) {
  const strSplit = num.toString().split(".");
  const integer = strSplit[0];
  const decimal = strSplit[1] || "";
  return integer.replace(/(\d{1,3})(?=(\d{3})+$)/g, function ($1) {
    return $1 + ",";
  }) + "." + decimal;
}

console.log("🚀🚀🚀wimi======>>>format", format(3.3));
console.log("🚀🚀🚀wimi======>>>format", format(23.33));
console.log("🚀🚀🚀wimi======>>>format", format(123.33));
console.log("🚀🚀🚀wimi======>>>format", format(12323.3333));
