let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice

let sentence = "Happy New Year ";
let newSentence = sentence + 10191;

console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string

let sentence1 = "Happy New ";
sentence1 += "Year ";
sentence1 += 10191;
console.log(sentence1); // -> Happy New Year 10191
