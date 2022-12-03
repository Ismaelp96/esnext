// não aceita repetição/não é indexado

const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthias');
times.add('Flamengo');
times.add('Vasco'); // ignorou

console.log(times);
console.log(times.size);
console.log(times.has('vasco')); // tem que estar igual
console.log(times.has('Vasco')); // forma correta
times.delete('Flamengo');
console.log(times.has('Flamengo'));

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);
