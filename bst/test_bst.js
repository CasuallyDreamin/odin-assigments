import bst from "./bst.js";

const tree = bst();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log(tree.contains(7));
console.log(tree.contains(20));
console.log(tree.traverse());
tree.prettyPrint();

