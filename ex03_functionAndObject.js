const function1 = function () {
    return "Retornando um valor da function 1";
}

const function2 = () => "Retornando um valor da function 2";

function function3() {
    return "Retornando um valor da function 3";
}

class Cliente {}

console.log(function1());
console.log(function2());
console.log(function3());

console.log(typeof Object)
console.log(typeof new Object)

console.log(typeof Cliente)
console.log(typeof new Cliente)