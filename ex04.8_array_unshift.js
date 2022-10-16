let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1

names.unshift("Thomas");
names.unshift("Charles");
console.log(names);