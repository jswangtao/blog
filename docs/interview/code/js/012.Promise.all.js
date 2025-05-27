function promiseAll(promises) {
  return new Promise((reslove, reject) => {
    let resultArr = [];
    let index = 0;
    for (let i = 0; i < promises.length; i++) {
      let p = promises[i];
      p.then((res) => {
        resultArr[i] = res;
        index++;
        if (index === promises.length) {
          reslove(resultArr);
        }
      }).catch((error) => {
        reject(error);
      });
    }
  });
}

// test

let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 2000);
});

let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});

promiseAll([p3, p1, p2]).then((res) => {
  console.log("🚀🚀🚀wimi======>>>res", res);
});
