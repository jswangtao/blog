/*
 * @Author: wangtao
 * @Date: 2022-03-24 23:07:31
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-13 23:50:53
 * @Description: file content
 */

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  // promise的初始状态
  status = PENDING;
  // 成功之后的值
  value = undefined;
  // 失败的原因
  reason = undefined;
  // 成功的回调
  successCallback = [];
  // 失败的回调
  failCallback = [];

  resolve = (value) => {
    if (this.status !== PENDING) return;
    // 将状态改为成功
    this.status = FULFILLED;
    // 保存成功的值
    this.value = value;
    // 如果有成功的回调，则调用
    // this.successCallback && this.successCallback(this.value);
    while (this.successCallback.length) {
      let x = this.successCallback.shift()();
    }
  };

  reject = (reason) => {
    if (this.status !== PENDING) return;
    // 将状态改为失败
    this.status = REJECTED;
    // 保存失败的原因
    this.reason = reason;
    // 如果有失败的回调，则调用
    // this.failCallback && this.failCallback(this.reason);
    while (this.failCallback.length) {
      this.failCallback.shift()();
    }
  };

  then(successCallback, failCallback) {
    // 参数可选
    successCallback = successCallback ? successCallback : (value) => value;
    // 参数可选
    failCallback = failCallback
      ? failCallback
      : (reason) => {
          throw reason;
        };
    let promise2 = new MyPromise((resolve, reject) => {
      // 判断状态
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = successCallback(this.value);
            // 判断 x 的值是普通值还是promise对象
            // 如果是普通值 直接调用resolve
            // 如果是promise对象 查看promsie对象返回的结果
            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = failCallback(this.reason);
            // 判断 x 的值是普通值还是promise对象
            // 如果是普通值 直接调用resolve
            // 如果是promise对象 查看promsie对象返回的结果
            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else {
        // 等待状态，将成功和失败的回调存储起来
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              let x = successCallback(this.value);
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值 直接调用resolve
              // 如果是promise对象 查看promsie对象返回的结果
              // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.failCallback.push(() => {
          setTimeout(() => {
            try {
              let x = failCallback(this.reason);
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值 直接调用resolve
              // 如果是promise对象 查看promsie对象返回的结果
              // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }

  finally(callback) {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value);
      },
      (reason) => {
        return MyPromise.resolve(callback()).then(() => {
          throw reason;
        });
      }
    );
  }

  catch(failCallback) {
    return this.then(undefined, failCallback);
  }

  static all(array) {
    let result = [];
    let index = 0;
    return new MyPromise((resolve, reject) => {
      function addData(key, value) {
        result[key] = value;
        index++;
        if (index === array.length) {
          resolve(result);
        }
      }
      for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current instanceof MyPromise) {
          current.then(
            (value) => addData(i, value),
            (reason) => reject(reason)
          );
        } else {
          addData(i, current);
        }
      }
    });
  }

  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    }
    return new MyPromise((resolve) => resolve(value));
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  if (x instanceof MyPromise) {
    // x.then((value)=>{resolve(value)},(reason)=>{reject(reason)})
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
}

// module.exports = MyPromise;

// let p1 = new MyPromise((reslove, reject) => {
//   // reslove("成功1");
//   // reject("失败");
//   setTimeout(() => {
//     reslove("成功1");
//   }, 2000);
//   // throw new Error("executor error");
// });

let p2 = new MyPromise((reslove, reject) => {
  // reslove("成功2");
  reject("失败");
});

p2.then((res) => {
  console.log("🚀🚀🚀wimi======>>>res", res);
}).catch((res) => {
  console.log("🚀🚀🚀wimi======>>>res", res);
});

// MyPromise.resolve(p1).then((res) => {
//   console.log("🚀🚀🚀wimi======>>>res", res);
// });

// p1.then().then(
//   (res) => {
//     console.log("🚀🚀🚀wimi======>>>res2", res);
//   },
//   (reason) => {
//     console.log("🚀🚀🚀wimi======>>>reason2", reason.message);
//   }
// );

function other() {
  return new MyPromise((resolve, reject) => {
    resolve("other");
  });
}
