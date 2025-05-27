// https://juejin.cn/post/6844903929705136141
const obj = {
  date: new Date(),
  undef: undefined,
  fun: () => {
    console.log("叽里呱啦，阿巴阿巴");
  },
  nan: NaN,
  infinityMax: 1.7976931348623157e10308,
  infinityMin: -1.7976931348623157e10308,
  objChild: null,
  testObj: {
    a: 1,
    b: 2,
  },
  testArr: [1, 2],
};

function deepClone(target, map = new Map()) {
  let cloneTarget = null;

  if (typeof target === "object" && target !== null) {
    cloneTarget = target instanceof Array ? [] : {};

    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);

    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map);
    }
  } else {
    cloneTarget = target;
  }

  return cloneTarget;
}

obj.objChild = obj;
// const objCopy = JSON.parse(JSON.stringify(obj));
const objCopy = deepClone(obj);

console.log("🚀🚀🚀wimi======>>>obj", obj);
console.log("🚀🚀🚀wimi======>>>objCopy", objCopy);
