// Type Aliases e Union

type Uid = number | string;

function logDetails(uid: Uid, item: string) {
	console.log(`A product with ${uid} has a title as ${item}.`);
}
logDetails(123, 'sapato');
logDetails('123', '123');

function logInfo(uid: Uid, user: string) {
	console.log(`An user with ${uid} has a name as ${user}.`);
}

logInfo(123, 'Daniel');
logInfo('123', 'Daniel');

type Platform = 'Window' | 'Linux' | 'Mac OS';

function renderPlatform(platform: Platform) {
	return platform;
}

renderPlatform('Window');
