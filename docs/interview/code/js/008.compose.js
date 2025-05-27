function compose(...fns) {
  let isFirst = false;
  return function (...args) {
    return fns.reduceRight((result, fn) => {
      if (!isFirst) {
        isFirst = true;
        return fn(...result);
      }
      return fn(result);
    }, args);
  };
}

// 测试
const greeting = (firstName, lastName) =>
  "hello, " + firstName + " " + lastName;
const toUpper = (str) => str.toUpperCase();
const fn = compose(toUpper, greeting);
console.log(fn("jack", "smith")); // HELLO, JACK SMITH
