let var1 = 10;
let var2 = 0;

const promise = new Promise((resolve, reject) => {
    console.log("Executando o Promise");
    if (var2 === 0)
        reject("Não existe divisão por zero.");
    else {
        let resultado = var1 / var2;
        resolve(resultado);
    }
        
    console.log("Promise executado");
});

promise
    .then((resultado) => console.log(`Resolvido: ${resultado}`))
    .catch((error) => console.log(error));