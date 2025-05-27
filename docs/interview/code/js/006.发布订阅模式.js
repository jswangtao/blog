/**
 * 有个事件池对象
 * subs {
 *  eventType:[handler,handler,...]
 * }
 */

class EventEmitter {
  constructor() {
    this.subs = {};
  }
  $on(eventType, handler) {
    this.subs[eventType] = this.subs[eventType] || [];
    this.subs[eventType].push(handler);
  }
  $emit(eventType) {
    if (this.subs[eventType]) {
      this.subs[eventType].forEach((handler) => {
        handler();
      });
    }
  }
}

const eventEmitter = new EventEmitter();
eventEmitter.$on("test", () => {
  console.log("🚀🚀🚀wimi======>>>test");
});
eventEmitter.$emit("test");
