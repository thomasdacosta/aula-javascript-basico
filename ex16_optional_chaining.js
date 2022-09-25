const aluno = {
    nome: "João",
    idade: 30,
    endereco: {
        rua: "Rua X",
        numero: 150,
        cidade: "São Paulo",
        estado: "SP"
    },
    mostrarNome() {
        return this.nome;
    }
};

console.log(aluno.mostrarNome?.());
console.log(aluno.profissao?.nome ?? "Não existe");
console.log(aluno.endereco?.cep ?? "Não existe");