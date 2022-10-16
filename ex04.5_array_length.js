let names  = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

names[5] = "Amelia";
console.log(names.length); // -> 6

console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel", undefined, "Amelia"]
console.log(names[3]); // -> Samuel
console.log(names[4]); // -> undefined
console.log(names[5]); // -> Amelia
