const num = 42;

const strFromNum1 = String(num);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean(0);

console.log(typeof strFromNum1);
console.log(typeof strFromNum2);
console.log(typeof strFromBool);
console.log(typeof numFromStr);
console.log(typeof boolFromNumber);

console.log(Number(42)); // -> 42
console.log(Number("11")); // -> 11
console.log(Number("0x11")); // -> 17
console.log(Number("0o11")); // -> 9
console.log(Number("0b11")); // -> 3
console.log(Number("12e3")); //  -> 12000
console.log(Number("Infinity"));// -> Infinity
console.log(Number("text")); // -> NaN
console.log(Number(14n)); // -> 14
console.log(Number(123456789123456789123n)); // - >  123456789123456800000
console.log(Number(true)); // -> 1
console.log(Number(false)); // -> 0
console.log(Number(undefined)); //  -> NaN
console.log(Number(null));// -> 0

console.log(Boolean(true)); // -> true
console.log(Boolean(42)); // -> true
console.log(Boolean(0)); // -> false
console.log(Boolean(NaN)); // -> false
console.log(Boolean("text")); // -> true
console.log(Boolean("")); // -> false
console.log(Boolean(undefined)); // -> false
console.log(Boolean(null)); // -> false

const str1 = 42 + "1";
console.log(str1);        // -> 421
console.log(typeof str1); // -> string

const str2 = 42 - "1";
console.log(str2);        // -> 41
console.log(typeof str2); // -> number

console.log(BigInt(11)); // -> 11n
console.log(BigInt(0x11)); // -> 17n
console.log(BigInt(11e2)); // -> 1100n
console.log(BigInt(true)); // -> 1n
console.log(BigInt("11")); // -> 11n
console.log(BigInt("0x11")); // -> 17n
console.log(BigInt(null)); // -> Uncaught TypeError: Cannot convert null to a BigInt
console.log(BigInt(undefined)); // -> Uncaught TypeError: Cannot convert undefined to a BigInt
console.log(BigInt(NaN)); // -> Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer

