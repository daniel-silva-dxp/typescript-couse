function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function delay(msg, temp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, temp);
  });
}

delay("Frase I", rand(1, 5)).then((response) => {
  console.log(response);
  return delay("Frase II", rand(1, 2)).then((response) => {
    console.log(response);
    return delay("Fase III", rand(1, 1)).then((response) => {
      console.log(response);
    });
  });
});
