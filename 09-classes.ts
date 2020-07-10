// abstract não permite criar obj à partir da class abstract
abstract class Account {
	protected a: number;
	protected b: number;
	protected c: number;

	constructor(a: number, b: number, c: number) {
		this.a = a;
		this.b = b;
		this.c = c;
	}
}

class UserAccount {
	protected name: string; // visível na class e subclass
	protected age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	logDetails(): void {
		console.log(`The player ${this.name} is ${this.age} years old`);
	}
}

class CharAccount extends UserAccount {
	private nickname: string; // visível na class
	private level: number; // readonly apenas leitura fora da class

	constructor(name: string, age: number, nickname: string, level: number) {
		super(name, age);
		this.nickname = nickname;
		this.level = level;
	}
	get getLevel() {
		return this.level;
	}

	set setLevel(level: number) {
		this.level = level;
	}
}

const daniel = new UserAccount('Daniel', 32);
const john = new CharAccount('John', 72, 'johnmaster', 80);

john.getLevel;
john.setLevel = 82;
