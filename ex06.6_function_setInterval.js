let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');

    setTimeout(function(){
        clearInterval(timerId);
    }, 10000);
}

console.log('test 1');
outer(inner);
console.log('test 2');