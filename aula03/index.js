var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var button = document.getElementById('soma');
function somar(a, b) {
    return a + b;
}
button.addEventListener('click', function () {
    console.log(somar(Number(input1.value), Number(input2.value)));
});
