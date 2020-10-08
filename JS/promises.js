function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function delay(msg, temp) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(msg);
      }, temp);
    } catch (e) {
      reject(e);
    }
  });
}

// delay("Frase I", rand(1, 5)).then((response) => {
//   console.log(response);
//   return delay("Frase II", rand(1, 2)).then((response) => {
//     console.log(response);
//     return delay("Fase III", rand(1, 1)).then((response) => {
//       console.log(response);
//     });
//   });
// });

// const arr = [
//   delay("Primeira Promise", rand(1, 5)),
//   delay("Segunda Promise", rand(1, 2)),
//   delay("Terceira Promise", rand(1, 3)),
// ];

// Promise.all(arr).then((response) => console.log(response));
// Promise.race(arr).then((response) => console.log(response));

async function play() {
  const val1 = await delay("Primeira Promise", rand(1, 5));
  console.log(val1);
  const val2 = await delay("Segunda Promise", rand(1, 2));
  console.log(val2);
  const val3 = await delay("Terceira Promise", rand(1, 3));
  console.log(val3);
}

play();
