// ['总章节', '(1)章节一', '(1.1)第一节', '(1.1.1)第一小节', '(1.1.2)第二小节', '(1.2)第二节', '(2)章节二', '(2.1)章节2-1', '(2.2)章节2-2']
var chapterTree = {
  name: "总章节",
  children: [
    {
      name: "章节一",
      children: [
        {
          name: "第一节",
          children: [{ name: "第一小节" }, { name: "第二小节" }],
        },
        { name: "第二节" },
      ],
    },
    {
      name: "章节二",
      children: [{ name: "章节2-1" }, { name: "章节2-2" }],
    },
  ],
};
function test() {
  let res = [];
  function composeLabel(tree, i, j) {
    if (!j) {
      res.push(tree.name);
      j = 1;
    } else {
      j = j === 1 ? `${i + 1}` : `${j}.${i + 1}`;
      res.push(`(${j})` + tree.name);
    }

    if (tree.children) {
      for (let index = 0; index < tree.children.length; index++) {
        composeLabel(tree.children[index], index, j);
      }
    }
  }
  composeLabel(chapterTree, 0, "");
  return res;
}

console.log("🚀🚀🚀wimi======>>>test()", test());
