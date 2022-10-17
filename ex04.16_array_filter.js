const array = [45, 8, 76, 17, 19];

const arrayDest = array
    .filter(item => item % 2 !== 0)
    .map(item => item * 1000);

console.log(arrayDest);

const arrayDest1 = array
    .filter(item => item % 2 !== 0);
console.log(arrayDest1);