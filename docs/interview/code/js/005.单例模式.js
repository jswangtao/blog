/* 
 1.全局唯一
 2.自我实例化
 3.获取实例化方法
*/

class SingleTon {
  constructor() {
    this._instance = null;
  }

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new SingleTon();
    return this._instance;
  }
}

console.log(
  "🚀🚀🚀wimi======>>>SingleTon",
  SingleTon.getInstance() === SingleTon.getInstance()
);
