const LinkedList = require('./linked-list');

const list = new LinkedList();

list.append("a");
list.append("b");
list.append("c");
list.append("d");

console.log(list.toString());
console.log(list.contains("d"));