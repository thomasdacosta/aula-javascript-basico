for (let i = 0; i < 10; i++) {
    console.log(i);
}

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < 4; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

sum = 0;
for (let i = 0; i < 4; i++) {
    sum += values[i];
}
console.log(sum); // -> 190