import hashtable from "./hashTable.js";
const table = hashtable();

table.set('apple', 'red')
table.set('banana', 'yellow')
table.set('carrot', 'orange')
table.set('dog', 'brown')
table.set('elephant', 'gray')
table.set('frog', 'green')
table.set('grape', 'purple')
table.set('hat', 'black')
table.set('ice cream', 'white')
table.set('jacket', 'blue')
table.set('kite', 'pink')
table.set('lion', 'golden')

console.log(table.keys()); // Display all keys
console.log(table.values());
console.log(table.entries());

console.log(table.get(2)); // Retrieve value for key 2
table.remove(2);

table.display(); // Display the hash table contents 