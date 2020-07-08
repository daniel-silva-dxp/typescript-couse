// boolean (true, false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 3.25;

// array
let items: number[]; // ou let items: Array<number>
items = [ 1, 2, 3, 4 ];

// tuple
let title: [string, number, boolean];
title = [ 'foo', 32, true ];

// enum
enum Gender {
	m = 'MASCULINO',
	f = 'FEMININO'
}

// any
let coisa: any;
coisa: true;

// void (vazio)
function foo(): void {
	console.log('foo');
}

// never
function error(): never {
	throw new Error('Error');
}

// object
let person: object;
person = {
	name: 'Daniel',
	lastname: 'Silva',
	age: 32
};
