// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
	id: number;
	name: string;
	email?: string;
};

const account: AccountInfo = {
	id: 123,
	name: 'Daniel',
	email: 'daniel_dxp@outlook.com'
};

type CharInfo = {
	nickname: string;
	level: number;
};

const char: CharInfo = {
	nickname: 'danieldxp',
	level: 100
};

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
	id: 123,
	name: 'Daniel',
	nickname: 'danieldxp',
	level: 100
};
