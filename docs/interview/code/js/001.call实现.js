function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age,
  };
}
var obj = {
  value: 1,
};

// 模拟实现call，call函数的作用就是让 obj临时拥有bar函数的执行，并接收，后续参数
// 给对象obj添加方法  obj.fn   执行方法 obj.fn()   删除方法 delete obj.fn
Function.prototype.mycall = function (context) {
  var context = context || window;
  context.fn = this;

  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push(arguments[i]);
  }

  var result = context.fn(...args);
  delete context.fn;
  return result;
};

// 模拟实现apply
Function.prototype.myapply = function (context, arr) {
  var context = context || window;
  context.fn = this;

  var args = [];
  if (Array.isArray(arr)) {
    args = arr;
  }

  var result = context.fn(...args);
  delete context.fn;
  return result;
};

console.log(
  '🚀🚀🚀wimi======>>>bar.call(obj, "kevin", 29)',
  bar.mycall(obj, ["kevin", 29])
);
