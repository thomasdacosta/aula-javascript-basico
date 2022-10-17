function add(a, b) {
    return a + b;
}

let myAdd = add;
console.log(myAdd(10, 20));     // -> 30
console.log(add(10, 20));   // -> 30

myAdd = function add(a, b) {
    return a + b;
}

console.log(myAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30

myAdd = function(a, b) {
    return a + b;
}

console.log(myAdd(10, 20)); // -> 30

function operation(func, first, second) {
    return func(first, second);
}

myAdd = function(a, b) {
    return a + b;
}

console.log(operation(myAdd, 10, 20)); // -> 30

console.log(operation(function(a, b) {
    return a * b;
}, 10, 20)); // -> 200
