const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;
const button = document.getElementById('btn')!;

function somar(a: number, b: number) {
	return a + b;
}

button.addEventListener('click', () => {
	console.log(somar(Number(input1.value), Number(input2.value)));
});
