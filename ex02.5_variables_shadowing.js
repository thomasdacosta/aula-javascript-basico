var counter = 100;

function testFunction() {
    var counter = 200;  
    console.log(counter);
}

console.log(counter); // -> 100
testFunction(); // -> 200
console.log(counter); // -> 100
