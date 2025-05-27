// https://juejin.cn/post/6844903476766441479
function objectFactory() {
  let obj = new Object();
  let Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  let ret = Constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret : obj;
}

function Otaku(name, age) {
  this.habit = "Games";

  return {
    name: name,
    habit: "Games",
  };
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
  console.log("I am " + this.name);
};

var person = objectFactory(Otaku, "Kevin", "18");

console.log(person.name); // Kevin
console.log(person.habit); // Games
console.log(person.strength); // 60
console.log(person.age); // 60
