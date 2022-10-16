let gate = "a";
let win = false;

switch (gate) {
    case "a":
        console.log("Gate A: empty");
        break;
    case "b":
        console.log("Gate B: main prize");
        win = true;
        break;
    case "c":
        console.log("Gate C: empty");
        break;
    default:
        console.log("No gate " + String(gate));
}

if (win) {
    console.log("Winner!");
}

switch (gate) {
    case "a":
        console.log("1 - Gate A: empty");
    case "b":
        console.log("2 - Gate B: main prize");
        win = true;
    case "c":
        console.log("3 - Gate C: empty");
    default:
        console.log("4 - No gate " + String(gate));
}

gate = "3";
switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
        console.log("Gate A: empty");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        console.log("Gate B: main prize");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        console.log("Gate C: empty");
        break;
    default:
        console.log("No gate " + String(gate));
}