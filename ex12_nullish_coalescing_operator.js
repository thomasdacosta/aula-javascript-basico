let nome = null;
console.log("Nome: " + (nome || "não informado"));

nome = "João";
console.log("Nome: " + (nome || "não informado"));

let idade = 0;
console.log("Idade: " + (idade ?? "não informado"));

idade = 30;
console.log("Idade: " + (idade ?? "não informado"));

idade = null;
console.log("Idade: " + (idade ?? "não informado"));