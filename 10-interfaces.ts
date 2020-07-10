interface Game {
	title: string;
	description: string;
	readonly genre: string; // readonly somente leitura
	platform?: string[];
	getSimilars: (title: string) => void;
}

const tlou: Game = {
	title: 'The last of Us',
	description: 'The best game in the world',
	genre: 'Action',
	platform: [ 'PS3', 'PS4' ],
	getSimilars: (title: string) => {
		console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
	}
};

tlou.getSimilars(tlou.title);
console.log(tlou.title);

interface DLC extends Game {
	originalGame: Game;
	newContent: string[];
}

const leftbehind: DLC = {
	title: 'The Last of US - Left Behind',
	description: 'You play as Ellie before the original game',
	genre: 'Action',
	platform: [ 'PS4' ],
	originalGame: tlou,
	newContent: [ '3 hours story', 'new charcters' ],
	getSimilars: (title: string) => {
		console.log(`Title: ${title}`);
	}
};

class CreateGame implements Game {
	title: string;
	description: string;
	genre: string;
	platform: string[];

	constructor(t: string, d: string, g: string, p: string[]) {
		this.title = t;
		this.description = d;
		this.genre = g;
		this.platform = p;
	}

	getSimilars(title: string) {
		console.log(title);
	}
}
