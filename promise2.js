//sem promise, callback HELL
setTimeout(function () {
  console.log('Executando callback..');
  setTimeout(function () {
    console.log('Executando callback...');
    setTimeout(function () {
      console.log('Executando callback!');
    }, 2000);
  }, 2000);
}, 2000);

// com promise

function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Executando promise...');
      resolve();
    }, tempo);
  });
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor);
