const funcionario = {
    nome : 'João',
    idade : 34,
    endereco: {
        logradouro : 'Rua X',
        numero : 567
    }
}

funcionario.nome = 'Maria';
console.log(funcionario.nome);
console.log("#destructuring 1")
const { nome, idade } = funcionario;
console.log(nome, idade)

console.log("#destructuring 2")
const { nome: n, idade: i} = funcionario;
console.log(n, i)

const { dataNascimento, rg = true } = funcionario;
console.log(dataNascimento, rg);

console.log("#destructuring 3")
const { endereco: { logradouro, numero, cep = true } } = funcionario;
console.log(logradouro, numero, cep)

//## Código abaixo apresenta erro
//const { conta: { ag, banco } } = funcionario;
//console.log(ag)

console.log("#destructuring 4")
const[a,,c,d,e,f,g] = [0,1,2,3,4,5,6];
console.log(a,c,d,e,f,g);

console.log("#destructuring 5")
function rand({ min= 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log("#destructuring 6");
const obj = { max : 50, min : 40};
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({}));

console.log("#destructuring 7");
function rand1([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);    
}

console.log(rand1([50, 40]));
console.log(rand1([992]));
console.log(rand1([, 10]));
console.log(rand1([]));