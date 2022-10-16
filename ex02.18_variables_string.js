let str = "java script language";

console.log(str.length); // -> 20
console.log('test'.length); // -> 4

console.log(str.charAt(0)); // -> 'j'
console.log('abc'.charAt(1)); // -> 'b'

console.log(str.slice(0, 4)); // -> 'java'
console.log('test'.slice(1, 3)); // -> 'es'

console.log(str.split(' ')); // -> ['java', 'script', 'language']
console.log('192.168.1.1'.split('.'));  // -> ['192', '168', '1', '1']

let ticket = {
	from: "Berlin",
	to: "Potsdam",
	price: 11
};

console.log(`Ticket from: ${ticket.from}`);
console.log(`Ticket to: ${ticket.to}`);
console.log(`Ticket price: ${ticket.price}`);