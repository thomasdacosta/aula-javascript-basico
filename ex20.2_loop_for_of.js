let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

sum = 0;
for (let number of values) {
    sum += number;
}
console.log(sum); // -> 190

let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}
