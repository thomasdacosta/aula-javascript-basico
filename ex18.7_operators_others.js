let year = 10191;
console.log(typeof year); // -> number
console.log(typeof false); // -> boolean

let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false

let user = {
    name: "Alice",
    age: 38
  };
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined

console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob

let name1 = 1 > 2 ? "Alice" : "Bob";
console.log(name1); // -> Bob
  
let n = 2 * 3 ** 3 - 1;
console.log(n);

