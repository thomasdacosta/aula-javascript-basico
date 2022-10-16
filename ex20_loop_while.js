let isOver = false;
let counter = 1;

while (isOver != true) {
    let continueLoop = confirm('[${counter}] Continue the loop?');
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}
