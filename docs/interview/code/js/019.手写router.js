class Route {
  constructor() {
    // 路由存储对象
    this.routes = {};
    //当前hash
    this.currentHash = "";
    //绑定this
    this.freshRoute = this.freshRoute.bind(this);
    // 监听
    window.addEventListener("load", this.freshRoute, false);
    window.addEventListener("hashchange", this.freshRoute, false);
  }
  // 存储
  storeRoute(path, cb) {
    this.routes[path] = cb || function () {};
  }
  //更新
  freshRoute() {
    this.currentHash = window.location.hash.slice(1);
    this.routes[this.currentHash]();
  }
}
