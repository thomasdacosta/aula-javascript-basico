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

const { nome, ...resto } = aluno;
console.log(nome);
console.log(JSON.stringify(resto));