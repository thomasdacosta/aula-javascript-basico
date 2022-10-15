let declaredVar;
console.log(typeof declaredVar); // -> undefined

declaredVar = 5;
console.log(typeof declaredVar); // -> number

declaredVar = undefined;
console.log(typeof declaredVar); // -> undefined

//The undefined value can also be returned by the typeof operator when a non-existent variable is used as an argument.

Console.log(typeof notDeclaredVar); // -> undefined
console.log(notDeclaredVar); // -> Uncaught ReferenceError: notDeclared is not defined
