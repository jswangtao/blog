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

function shallowCopy(obj) {
  // 只拷贝对象
  if (!obj || typeof obj !== "object") {
    return;
  }

  // 根据类型看是创建一个数组还是对象
  let newObj = Array.isArray(obj) ? [] : {};
  //遍历拷贝对象
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const objCopy = shallowCopy(obj);

console.log("🚀🚀🚀wimi======>>>objCopy", objCopy);
