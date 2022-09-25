const promise1 = Promise.resolve("Executando Promise 1");
const promise2 = Promise.resolve("Executando Promise 2");
const promise3 = Promise.resolve("Executando Promise 3");

// Executa todas nas sequências como se fosse uma orquestração
let all = Promise.all([promise1, promise2, promise3]);
all.then((data) => {
    console.log(data);
});
