const promiseTempo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Executando Promise com Timeout");
    }, 5000);
});

const promise1 = Promise.resolve("Executando Promise 1");
const promise2 = Promise.resolve("Executando Promise 2");
const promise3 = Promise.resolve("Executando Promise 3");

Promise.race([promiseTempo, promise1, promise2, promise3]).then((data) => {
    console.log(data);
});
