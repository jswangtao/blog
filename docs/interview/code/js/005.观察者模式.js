/**
 * deps = [] 观察者数组
 * 观察者
 * 添加观察者到 观察者数组
 * 收到通知，所有观察者调用自己的update方法进行自我更新
 */

class Dep {
  constructor() {
    this.deps = [];
  }
  addDep(watcher) {
    if (watcher && watcher.update) {
      this.deps.push(watcher);
    }
  }
  notify() {
    this.deps.forEach((watcher) => {
      watcher.update();
    });
  }
}

class Watcher {
  update() {
    console.log("🚀🚀🚀wimi======>>>执行更新");
  }
}

const dep = new Dep();
dep.addDep(new Watcher());
dep.notify();
