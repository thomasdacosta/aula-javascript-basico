const ola = function (mensagem) {
    return mensagem
}

function mostrarMensagem(mensagem, imprime = ola) {
    console.log(imprime(mensagem));
}

mostrarMensagem("Olá mundo");
mostrarMensagem("Olá mundo", (mensagem) => {
    return "Mensagam de " + mensagem
});

const aluno = {
    nome : "João da Silva",
    estudar : () => "Aluno estudando",
    programar() {
        return "Aluno programando"
    }
}

console.log(aluno.estudar());
console.log(aluno.programar());