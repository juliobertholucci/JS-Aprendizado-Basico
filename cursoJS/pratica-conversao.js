
console.log(Number("1"));

console.log(Number("Alura")); // retorna NaN

console.log(Number(undefined)); // retorna NaN

console.log(Number(null)); // retorna 0

console.log(typeof +true);

var d = new Date("December 17, 1995 03:24:00");
console.log(Number(d));

const frase = 'ESTUDANDO node'.toLowerCase(); //string começa com maiúsculas mas é convertida para minusculas


console.log(frase.includes('ESTUDANDO')); //função busca pela palavra ESTUDANDO mas não encontra pois foi convertida para lower case


