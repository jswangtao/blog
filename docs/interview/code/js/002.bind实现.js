// https://juejin.cn/post/6844903476623835149
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

Function.prototype.myBind = function (context) {
  let self = this;

  let args = Array.prototype.slice.call(arguments, 1);

  let fNOP = function () {};

  let fbound = function () {
    let bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof self ? this : context,
      args.concat(bindArgs)
    );
  };
  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP();

  return fbound;
};

let bindFoo = bar.myBind(obj, "kevin");

let objres = new bindFoo("29");
console.log("bar.bind(obj); ", objres);
// console.log("bar.bind(obj); ", bar.bind(obj)("kevin", "29"));
