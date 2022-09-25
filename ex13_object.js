const aluno = {
    nome: "João",
    idade: 30,
    endereco: {
        rua: "Rua X",
        numero: 150,
        cidade: "São Paulo",
        estado: "SP"
    }
};

console.log("nome" in aluno);
console.log("idade" in aluno);
console.log("empresa" in aluno);

console.log(Object.keys(aluno));
console.log(Object.values(aluno));
console.log(JSON.stringify(Object.values(aluno)));
console.log(JSON.stringify(Object.entries(aluno)));

// Destructuring 
const { nome, idade: age, nickname = "Apelido" } = aluno;
console.log(nome, age, nickname);

function mostrarNome({ nome }) {
    return nome;
}

console.log(mostrarNome(aluno));