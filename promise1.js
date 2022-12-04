const primeiroElemento = (string) => string[0];
const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
})
  .then(primeiroElemento) // -> primeiro elemento do array
  .then(primeiroElemento) // -> primeira letra
  .then(letraMinuscula)
  .then(console.log);
