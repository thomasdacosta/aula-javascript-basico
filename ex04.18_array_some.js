const array = [45, 8, 76, 17, '', 19];

array.forEach(item => {
    console.log(typeof item);
});

const ret = array.some(item => typeof item == 'string');
console.log(ret);