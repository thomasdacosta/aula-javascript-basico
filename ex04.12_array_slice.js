let names = ["Olivia", "Emma", "Mateo", "Samuel"];

let n1 = names.slice(2);
console.log(n1); // -> ["Mateo", "Samuel"]

let n2 = names.slice(1,3);
console.log(n2); // -> ["Emma", "Mateo"]

let n3 = names.slice(0, -1);
console.log(n3); // -> ["Olivia", "Emma", "Mateo"]

let n4 = names.slice(-1);
console.log(n4); // -> ["Samuel"]
console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel"]
